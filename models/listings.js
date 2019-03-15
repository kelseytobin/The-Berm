/* eslint-disable camelcase */
// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// var Listings = sequelize.define("listing", {
//   item_name: Sequelize.STRING,
//   item_price: Sequelize.INTEGER,
//   item_category: Sequelize.STRING,
//   // item_image: not sure about this one
//   seller_email: Sequelize.STRING,
//   createdAt: Sequelize.STRING,
//   sold: Sequelize.DataTypeBoolean
// });

// Listings.sync();

// module.exports = Listings;

module.exports = function(sequelize, DataTypes) {
  var Listings = sequelize.define("Listings", {
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    item_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    item_category: {
      type: DataTypes.STRING,
      defaultValue: "Bikes"
    },
    seller_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    sold: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Listings;
};
