// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes handles the HTML page that the user gets sent to.

  //route loads home page
  app.get("/", function(req, res) {
    res.render("index");
  });

  //route loads display bikes page
  app.get("/bikes", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/bikes.handlebars"));
    console.log("this is bikes page");
  });

  //route loads display accessories page
  app.get("/accessories", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/accessories.handlebars"));
  });

  //route loads display apparrel page
  app.get("/apparel", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/apparel.handlebars"));
  });

  // route loads display view all page
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/all.handlebars"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
