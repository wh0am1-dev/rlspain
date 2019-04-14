const fs = require('fs')
const path = 'assets/data/db.json'

let db = fs.readFileSync(path, 'utf8')
fs.writeFileSync(`${path}.BAK`, db)
db = JSON.parse(db)

// =============
// |  mapping  |
// =============

db = db.sort((a, b) => a.mmr < b.mmr ? 1 : (a.mmr > b.mmr ? -1 : 0))
let yesterday = db.slice().sort((a, b) => a._mmr < b._mmr ? 1 : (a._mmr > b._mmr ? -1 : 0))

db = db.map((p, i) => {
  // change ps to platform
  p.platform = p.ps ? 'ps' : 'steam'
  delete p.ps

  // add 3v3
  p.vs3 = {
    pos: i + 1,
    deltaPos: i - yesterday.findIndex(y => y.id === p.id),
    mmr: p.mmr,
    deltaMmr: p.mmr - p._mmr
  }

  delete p.mmr
  delete p._mmr

  p.vs2 = {
    pos: 0,
    deltaPos: 0,
    mmr: 0,
    deltaMmr: 0
  }

  p.vs1 = {
    pos: 0,
    deltaPos: 0,
    mmr: 0,
    deltaMmr: 0
  }

  delete p.province
  delete p.region

  return p
})

// =================
// |  end mapping  |
// =================

db = JSON.stringify(db, null, 2)
fs.writeFileSync(path, db)
