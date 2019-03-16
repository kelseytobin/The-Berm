module.exports = function (sequelize, DataTypes) {
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
      defaultValue: "bikes"
    },
    seller_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    sold: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });
  return Listings;
};
