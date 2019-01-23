const fs = require('fs')
const Crawler = require('crawler')

function crawl () {
  let db = readDB()

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
      let mmr = $('.card-list-item[data-id="13"] > .badge').text()

      updatePlayer(db, id, mmr)
      done()
    }
  })

  c.on('drain', () => writeDB(db.sort(comparePlayers)))
  db.forEach(player => c.queue(buildURL(player)))
  db.forEach(player => c.queue(buildURL(player, true)))
}

function buildURL (player, mmr = false) {
  const URL = 'https://rocketleague.tracker.network/profile'
  return `${URL}${mmr ? '/mmr' : ''}/${player.ps ? 'ps' : 'steam'}/${player.id}`
}

function readDB () {
  return JSON.parse(fs.readFileSync('assets/data/db.json', 'utf8'))
}

function writeDB (db) {
  fs.writeFileSync('assets/data/db.json', JSON.stringify(db, null, 2))
  process.exit()
}

function comparePlayers (a, b) {
  return a.mmr < b.mmr ? 1 : (a.mmr > b.mmr ? -1 : 0)
}

function idx (db, id) {
  for (let i = 0; i < db.length; i++) {
    if (db[i].id === id) {
      return i
    }
  }

  return null
}

function updatePlayer (db, id, mmr) {
  let i = idx(db, id)
  db[i]._mmr = db[i].mmr
  db[i].mmr = parseInt(mmr)
}

crawl()
