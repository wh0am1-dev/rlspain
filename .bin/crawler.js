const fs = require('fs')
const Crawler = require('crawler')
const stringify = require('json-stable-stringify')

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

    let _mmr = db[i].v1.mmr
    let gamesPlayed = +$('.stats[data-id="10"] > div:nth-child(1) > span').text()
    db[i].v1.mmr = gamesPlayed ? +$('.card-list-item[data-id="10"] > .badge').text() : 0
    db[i].v1.deltaMmr = db[i].v1.mmr - _mmr

    _mmr = db[i].v2.mmr
    gamesPlayed = +$('.stats[data-id="11"] > div:nth-child(1) > span').text()
    db[i].v2.mmr = gamesPlayed ? +$('.card-list-item[data-id="11"] > .badge').text() : 0
    db[i].v2.deltaMmr = db[i].v2.mmr - _mmr

    _mmr = db[i].v3.mmr
    gamesPlayed = +$('.stats[data-id="13"] > div:nth-child(1) > span').text()
    db[i].v3.mmr = gamesPlayed ? +$('.card-list-item[data-id="13"] > .badge').text() : 0
    db[i].v3.deltaMmr = db[i].v3.mmr - _mmr

    done()
  }
})

c.on('drain', () => {
  // calculate player positioning
  let db1 = db.slice().sort((a, b) => Math.sign(b.v1.mmr - a.v1.mmr))
  let db2 = db.slice().sort((a, b) => Math.sign(b.v2.mmr - a.v2.mmr))
  let db3 = db.slice().sort((a, b) => Math.sign(b.v3.mmr - a.v3.mmr))

  db = db.sort((a, b) => a.nick.localeCompare(b.nick)).map((p, i) => {
    let pos = db1.findIndex(_p => _p.id === p.id) + 1
    p.v1.deltaPos = pos - p.v1.pos
    p.v1.pos = pos

    pos = db2.findIndex(_p => _p.id === p.id) + 1
    p.v2.deltaPos = pos - p.v2.pos
    p.v2.pos = pos

    pos = i + 1
    p.v3.deltaPos = pos - p.v3.pos
    p.v3.pos = pos

    return p
  })

  fs.writeFileSync('assets/data/db.json', stringify(db, { space: 2 }))
  process.exit()
})

db.forEach(player => c.queue(`${URL}/${player.platform}/${player.id}`))
db.forEach(player => c.queue(`${URL}/mmr/${player.platform}/${player.id}`))
