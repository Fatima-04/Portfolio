var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const a = [
    { title: "ABC", body: "dft fg ftftty yt" },
    { title: "DEF", body: "dfhghft fg ftfghgfhgfhtty yt" },
    { title: "ghghg", body: "hjgkjhg hj hj jhj jh" },
  ];
  res.render("index", { title: "Express", test: a });
});

router.get("/abc", function (req, res, next) {
  const a = [
    { title: "ABC", body: "dft fg ftftty yt" },
    { title: "DEF", body: "dfhghft fg ftfghgfhgfhtty yt" },
    { title: "ghghg", body: "hjgkjhg hj hj jhj jh" },
  ];
  res.render("index", { title: "about", test: a });
});

module.exports = router;
