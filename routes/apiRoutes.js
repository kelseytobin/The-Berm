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
    })
      .then(function (dbListings) {
      res.render(dbListings);
    });
  });

  // get all apparel - working
  app.get("/api/apparel", function(req, res) {
    db.Listings.findAll({
      where: {
        item_category: "apparel"
      }
    })
      .then(function (dbListings) {
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

  //create new listing - think we will need to reformat this to modal
  // app.post("/api/listings", function(req, res) {
  //   console.log(req.body);
  //   db.Listings.create({
  //     item_name: req.body.item_name,
  //     item_price: req.body.item_price,
  //     item_category: req.body.item_category,
  //     seller_email: req.body.seller_email,
  //     createdAt: req.body.createdAt,
  //     sold: req.body.sold
  //   }).then(function(dbListings) {
  //     res.json(dbListings);
  //   });
  // });

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
