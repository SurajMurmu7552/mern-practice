const express = require("express");
const router = express.Router();

let students = [];

router
  .route("/")
  .get((req, res) => {
    res.send(students);
  })
  .post((req, res) => {
    const { name, roll } = req.body;

    let id = Math.floor(Math.random() * 100000).toString();

    students.push({
      id,
      name,
      roll,
    });

    res.send({
      id,
      name,
      roll,
    });
  })
  .patch((req, res) => {
    const { id } = req.query;
    const { name, roll } = req.body;

    let updated = false;
    students = students.map((el) => {
      if (el.id == id) {
        updated = true;
        el.name = name;
        el.roll = roll;

        return {
          id,
          name,
          roll,
        };
      } else {
        return el;
      }
    });

    if (updated) {
      res.status(200).send({
        message: "Updated",
      });
    } else {
      res.status(404).send({
        message: "Not Found",
      });
    }
  })
  .delete((req, res) => {
    const { id } = req.query;

    let deleted = false;
    students = students.filter((el) => {
      if (el.id == id) {
        deleted = true;
      } else {
        return el;
      }
    });

    if (deleted) {
      res.status(200).send({
        message: "Deleted",
      });
    } else {
      res.status(404).send({
        message: "Not Found",
      });
    }
  });

module.exports = router;
