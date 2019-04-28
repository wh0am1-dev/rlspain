const fs = require('fs')
const stringify = require('json-stable-stringify')
const path = 'assets/data/db.json'

let db = fs.readFileSync(path, 'utf8')
fs.writeFileSync(`${path}.BAK`, db)
db = JSON.parse(db)

// =============
// |  mapping  |
// =============

db = db.map((p, i) => {
  p.v1 = p.vs1
  p.v2 = p.vs2
  p.v3 = p.vs3

  delete p.vs1
  delete p.vs2
  delete p.vs3

  return p
})

// =================
// |  end mapping  |
// =================

db = stringify(db, { space: 2 })
fs.writeFileSync(path, db)
