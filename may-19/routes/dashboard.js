const express = require("express");
const router = express.Router();

let products = [];

router
  .route("/")
  .get((req, res) => {
    res.send(products);
  })
  .post((req, res) => {
    const { name, price } = req.body;

    let id = Math.floor(Math.random() * 100000).toString();

    products.push({
      id,
      name,
      price,
    });

    res.send({
      id,
      name,
      price,
    });
  })
  .patch((req, res) => {
    const { id } = req.query;
    const { name, price } = req.body;

    let updated = false;
    products = products.map((el) => {
      if (el.id == id) {
        updated = true;
        el.name = name;
        el.price = price;

        return {
          id,
          name,
          price,
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
    products = products.filter((el) => {
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
