// Set up MySQL connection.
var mysql = require("mysql");
var connection;

//Require dotenv for db control
require("dotenv").config();

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "MYSQL_USERNAME",
    password: "MYSQL_PASSWORD",
    database: "berm_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
