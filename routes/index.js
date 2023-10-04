/*
    Name: Fatima Tuz Zahra
    ID: 301347439
    Date: Oct 03, 2023
 */

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home Page", page: "home" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home Page", page: "home" });
});

router.get("/about", function (req, res, next) {
  res.render("index", { title: "About Me", page: "about" });
});

router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services", page: "services" });
});

router.get("/projects", function (req, res, next) {
  res.render("index", { title: "Projects", page: "projects" });
});

router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact Me", page: "contact" });
});

router.post("/PageSubmit", function (req, res, next) {
  res.render("index", { title: "home page", page: "home" });
});

module.exports = router;
