var db = require("../models/index.js");

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  //DONT THINK ANY OF THIS IS RIGHT

  // route loads home page
  //trying this instead
  app.get("/", function(req, res) {
    res.render("index");
  
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
  // });

  //route loads display bike page
  app.get("/bikes", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/bikes.handlebars"));
  });

  // route loads display accessories page
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/accessories.handlebars"));
  });

  // route loads display apparrel page
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/apparel.handlebars"));
  });

  // route loads display view all page
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/all.handlebars"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
});
}