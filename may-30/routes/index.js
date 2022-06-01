var express = require("express");
var router = express.Router();

const students = require("../models/studentModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", async (req, res, next) => {
  const { name, roll, grade } = req.query;

  try {
    const rollFound = await students.findOne({ roll });
    console.log(rollFound);

    if (!rollFound) {
      const insertData = await students.create({
        name,
        roll,
        grade,
      });

      console.log(insertData);

      res.status(200).send({
        msg: "data inserted",
      });
    } else {
      res.status(200).send({
        msg: "data already exists",
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
