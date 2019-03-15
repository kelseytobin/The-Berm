/* eslint-disable camelcase */
//dependencies

//var db = require("../models/index.js");
var db = require("../models");

module.exports = function(app) {
  // Get all listings
  app.get("/api/listings", function(req, res) {
    db.Listings.findAll({}).then(function(dbListings) {
      res.json(dbListings);
    });
  });

  // Create route for specific category
  app.get("/api/listings/category/:category", function(req, res) {
    db.Listings.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbListings) {
      res.json(dbListings);
    });
  });

  // app.post("/api/listings", function(req, res) {
  //   db.Listings.create(req.body).then(function(dbListings) {
  //     res.json(dbListings);
  //   });
  // });

  //create new listing
  app.post("/api/listings", function(req, res) {
    console.log(req.body);
    db.Listings.create({
      item_name: req.body.item_name,
      item_price: req.body.item_price,
      item_category: req.body.item_category,
      seller_email: req.body.seller_email,
      createdAt: req.body.createdAt,
      sold: req.body.sold
    }).then(function(dbListings) {
      res.json(dbListings);
    });
  });

  // Delete a listing by id
  app.delete("/api/listings/:id", function(req, res) {
    db.Listings.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbListings) {
      res.json(dbListings);
    });
  });
};
