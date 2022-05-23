var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  const { age } = req.query;
  if (age >= 18 && age <= 200) {
    res.status(200).send({
      message: "eligilbe to vote",
    });
  } else if (age < 18 && age > 0) {
    res.status(400).send({
      message: "not eligible to vote",
    });
  } else {
    next("invalid age");
  }
});

module.exports = router;
