const sqllite = require('sqlite3').verbose()

class DB {
  constructor(file) {
    this.db = new sqllite.Database(file)
    this.createTable()
  }

  createTable() {
    const sql = `
        CREATE TABLE user(
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          user_pass TEXT NOT NULL,
          is_admin INTEGER NOT NULL DEFAULT 0
        )
      `
    return this.db.run(sql)
  }

  insert(user, callback) {
    return this.db.run(
      `INSERT INTO user (name, email, user_pass) VALUES(?, ?, ?)`,
      user,
      (err) => { callback(err) }
    )
  }
}
module.exports = DB