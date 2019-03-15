var db = require("../models/index.js");

module.exports = function(app) {
  // Get all examples
  app.get("/api/listings", function(req, res) {
    db.Listings.findAll({}).then(function(dbListings) {
      res.json(dbListings);
    });
  });

  // Create a new example
  app.post("/api/listings", function(req, res) {
    db.Listings.create(req.body).then(function(dbListings) {
      res.json(dbListings);
    });
  });

  // Delete an example by id
  app.delete("/api/listings/:id", function(req, res) {
    db.Listings.destroy({ where: { id: req.params.id } }).then(function(
      dbListings
    ) {
      res.json(dbListings);
    });
  });
};
