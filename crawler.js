const fs = require('fs')
const Crawler = require('crawler')

const URL = 'https://rocketleague.tracker.network/profile'
let db = JSON.parse(fs.readFileSync('assets/data/db.json', 'utf8'))

let c = new Crawler({
  maxConnections: 10,
  callback: (error, res, done) => {
    if (error) {
      console.log(error)
      done()
      return
    }

    // check if we are refreshing or obtaining the mmr
    let uriParts = res.request.uri.path.split('/')
    if (uriParts.indexOf('mmr') === -1) {
      done()
      return
    }

    // extract the mmr from the webpage
    let $ = res.$
    let id = uriParts[uriParts.length - 1]
    let i = db.findIndex(p => p.id === id)

    let _mmr = db[i].vs1.mmr
    let gamesPlayed = +$('.stats[data-id="10"] > div:nth-child(1) > span').text()
    db[i].vs1.mmr = gamesPlayed ? +$('.card-list-item[data-id="10"] > .badge').text() : 0
    db[i].vs1.deltaMmr = db[i].vs1.mmr - _mmr

    _mmr = db[i].vs2.mmr
    gamesPlayed = +$('.stats[data-id="11"] > div:nth-child(1) > span').text()
    db[i].vs2.mmr = gamesPlayed ? +$('.card-list-item[data-id="11"] > .badge').text() : 0
    db[i].vs2.deltaMmr = db[i].vs2.mmr - _mmr

    _mmr = db[i].vs3.mmr
    gamesPlayed = +$('.stats[data-id="13"] > div:nth-child(1) > span').text()
    db[i].vs3.mmr = gamesPlayed ? +$('.card-list-item[data-id="13"] > .badge').text() : 0
    db[i].vs3.deltaMmr = db[i].vs3.mmr - _mmr

    done()
  }
})

c.on('drain', () => {
  // calculate player positioning
  let db1 = db.slice().sort((a, b) => a.vs1.mmr < b.vs1.mmr ? 1 : (a.vs1.mmr > b.vs1.mmr ? -1 : 0))
  let db2 = db.slice().sort((a, b) => a.vs2.mmr < b.vs2.mmr ? 1 : (a.vs2.mmr > b.vs2.mmr ? -1 : 0))
  let db3 = db.slice().sort((a, b) => a.vs3.mmr < b.vs3.mmr ? 1 : (a.vs3.mmr > b.vs3.mmr ? -1 : 0))

  db = db3.slice().map((p, i) => {
    let pos = db1.findIndex(_p => _p.id === p.id) + 1
    p.vs1.deltaPos = pos - p.vs1.pos
    p.vs1.pos = pos

    pos = db2.findIndex(_p => _p.id === p.id) + 1
    p.vs2.deltaPos = pos - p.vs2.pos
    p.vs2.pos = pos

    // TODO: reimplement when adding 2v2 & 1v1
    pos = i + 1
    p.vs3.deltaPos = pos - p.vs3.pos
    p.vs3.pos = pos

    return p
  })

  fs.writeFileSync('assets/data/db.json', JSON.stringify(db, null, 2))
  process.exit()
})

db.forEach(player => c.queue(`${URL}/${player.platform}/${player.id}`))
db.forEach(player => c.queue(`${URL}/mmr/${player.platform}/${player.id}`))
