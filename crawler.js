const fs = require('fs')
const crawler = require('crawler')

const URL = 'https://rocketleague.tracker.network/profile/mmr'

const readDB = () => JSON.parse(fs.readFileSync('assets/data/db.json', 'utf8'))
const writeDB = db => fs.writeFile('assets/data/db.json', JSON.stringify(db, null, 2), () => process.exit())
const buildURL =  p => `${URL}/${p.ps ? 'ps' : 'steam'}/${p.id}`
const updatePlayer = (db, id, mmr) => db[idx(db, id)].mmr = parseInt(mmr)
const idx = (db, id) => { for (let i = 0; i < db.length; i++) if (db[i].id == id) return i; return null }

const crawl = () => {
  let db = readDB()

  let c = new crawler({
    maxConnections: 10,
    callback: (error, res, done) => {
      if (error) return

      let $ = res.$
      let id = res.request.uri.path.split('/')
      id = id[id.length - 1]
      let mmr = $('body > div.container.content-container > div:nth-child(1) > div.trn-profile > div > div > div > div.col-md-3 > div.card.card-list > a.card-list-item.active > span').text()

      updatePlayer(db, id, mmr)
      done()
    }
  })

  c.on('drain', () => writeDB(db))
  db.forEach(player => c.queue(buildURL(player)))
}

crawl()
