var db = require('./db');

module.exports.handleSingup = (email,password) => {
  //check if email exists,
  db.saveUser({email,password})
  //send velcome mail
}
