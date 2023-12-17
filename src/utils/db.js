'user strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'trabalho'
})

connection.connect(function(err){
    if (err) {
        console.log('Error in database connection ')
        throw err
    }
    console.log('Database connection active!')
})

exports.addUser = function(body) {
    return new Promise(function(resolve, reject) {
      sql.query("INSERT INTO users (name, email, status) VALUES (?,?,?)", [body.name, body.email, body.status], function(err, res) {
        if (err) {
          reject(err)
        } else { 
          resolve (res.insertId)
        }
      })
    })
}
exports.deleteUser = function(userId) {
    return new Promise(function(resolve, reject) {
      sql.query("DELETE FROM users WHERE id = ?)", [userId], function(err, res) {
        if (err || !res.affectedRows) {
          reject(err)
        } else { 
          resolve (userId)
        }
      })
    });
}

exports.getAllUsers = function() {
    return new Promise("SELECT * from users", [userId], function(err, res) {
      if (err) {
        reject(err)
      } else { 
        resolve (res)
      }
    });
}

exports.getUserById = function(userId) {
return new Promise("SELECT * from users WHERE id = ?", [userId], function(err, res) {
    if (err) {
        reject(err)
    } else { 
        resolve (res[0])
    }
    });
}

exports.updateUser = function(body, userId) {
    return new Promise("SELECT * from users WHERE id = ?", [userId], function(err, res) {
      if (err) {
        reject(err)
      } else { 
        resolve (res[0])
      }
    });
}

exports.addCalendar = async function(body, userId) {
    await mysql.beginTransaction();

    try {
        const s = sql.query("INSERT INTO calendars (description) VALUES (?)", [body.description]);

        
        await connection.commit();

    } catch (error) {
         await connection.rollback();
    }

    return new Promise(function(resolve, reject) {
      sql.query("INSERT INTO calendars (description) VALUES (?)", [body.description], function(err, res) {
        if (err) {
          reject(err)
        } else { 

          resolve (res.insertId)
        }
      })
    })
}
exports.deleteCalendar = function(userId, calendarId) {
    return new Promise(function(resolve, reject) {
      sql.query("DELETE FROM calendars WHERE id = ?)", [calendarId], function(err, res) {
        if (err || !res.affectedRows) {
          reject(err)
        } else { 
          resolve (calendarId)
        }
      })
    });
}

exports.getAllCalendars = function() {
    return new Promise("SELECT * from calendars c, user_calendars uc WHERE c.id = uc.calendar_id and uc.user_id = ?", [userId], function(err, res) {
      if (err) {
        reject(err)
      } else { 
        resolve (res)
      }
    });
}

exports.getCalendarById = function(userId, calendarId) {
return new Promise("SELECT * from calendars c, user_calendars uc WHERE c.id = uc.calendar_id and uc.user_id = ? and uc.calendar_id = ?", [userId, calendarId], function(err, res) {
    if (err) { 
        reject(err)
    } else { 
        resolve (res[0])
    }
    });
}

exports.updateUser = function(body, userId, calendarId) {
    return new Promise("SELECT * from users WHERE id = ?", [userId], function(err, res) {
      if (err) {
        reject(err)
      } else { 
        resolve (res[0])
      }
    });
  }
module.exports = connection