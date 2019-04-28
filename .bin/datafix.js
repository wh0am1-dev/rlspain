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
  p.nick = p.nickname
  delete p.nickname
  return p
})

// =================
// |  end mapping  |
// =================

db = stringify(db, { space: 2 })
fs.writeFileSync(path, db)
