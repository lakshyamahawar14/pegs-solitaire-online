const sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./scores.db");

var _isExist = false;

const addUser = (_username, _score) => {
  // db.run(`CREATE TABLE users (username TEXT, score INT)`);
  db.get(
    `SELECT username FROM users WHERE username = "${_username}"`,
    (err, row) => {
      if (err) {
        return console.error(err.message);
      }
      if (row !== undefined) {
        _isExist = !_isExist;
        return console.log(`Username Already Taken`);
      } else {
        var stmt = db.prepare(`INSERT INTO users VALUES(?, ?)`);
        stmt.run(_username, _score);
        stmt.finalize();
        db.each(
          `SELECT username, score FROM users ORDER BY score DESC`,
          (err, row) => {
            if (err) {
              return console.error(err.message);
            }
            console.log(`Username: ${row.username}, Score: ${row.score}`);
          }
        );
      }
    }
  );
};

module.exports = addUser;