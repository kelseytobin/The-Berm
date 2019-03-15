var db = require("../models/index.js");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Listings.findAll({}).then(function(dbListings) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbListings
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/listings/:id", function(req, res) {
    db.Listings.findOne({ where: { id: req.params.id } }).then(function(
      dbListings
    ) {
      res.render("listings", {
        example: dbListings
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
