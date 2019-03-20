// Requiring our model
var db = require("../models");

module.exports = function(app) {
  // Get all listings- working
  app.get("/api/listings", function(req, res) {
    db.Listings.findAll({}).then(function(dbListings) {
      res.json(dbListings);
    });
  });

  // get all bikes - working
  app.get("/api/bikes", function(req, res) {
    db.Listings.findAll({
      where: {
        item_category: "bikes"
      }

    }).then(function(dbListings) {
        res.json(dbListings);
      });
  });

  // get all apparel - working
  app.get("/api/apparel", function(req, res) {
    db.Listings.findAll({
      where: {
        item_category: "apparel"
      }
    }).then(function(dbListings) {
        res.json(dbListings);
      });
  });

  // get all accessories - working
  app.get("/api/accessories", function(req, res) {
    db.Listings.findAll({
      where: {
        item_category: "accessories"
      }
    }).then(function(dbListings) {
      res.json(dbListings);
    });
  });

  // get all parts - working
  app.get("/api/parts", function(req, res) {
    db.Listings.findAll({
      where: {
        item_category: "parts"
      }
    }).then(function(dbListings) {
      res.json(dbListings);
    });
  });

  app.post("/api/newListings", function(req, res) {
    var newListings = req.body;

    db.Listings.create({
      item_name: newListings.itemName,
      item_price: newListings.itemPrice,
      item_category: newListings.itemCategory,
      seller_email: newListings.sellerEmail
    }).then(function(dbListings) {
      res.json(dbListings);

      console.log(newListings);
      console.log(db.Listings);
    });
  });

  // // Delete a listing by id - need to associate this with a button?
  // app.delete("/api/listings/:id", function(req, res) {
  //   db.Listings.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbListings) {
  //     res.json(dbListings);
  //   });
  // });
};
