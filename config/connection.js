// Set up MySQL connection.
var Sequelize = require("sequelize");

//Require dotenv for db control
require("dotenv").config();

if (process.env.JAWSDB_URL) {
  var connection = Sequelize.createConnection(process.env.JAWSDB_URL);
} else {
  var sequelize = new Sequelize("berm_db", "MYSQL_USERNAME", "MYSQL_PASSWORD", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 1000
    }
  });
}

// Make connection.
sequelize.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = sequelize;
