var express = require("express");
var router = express.Router();

let users = [];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(users);
});

// GET single user

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  let user = {};

  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    if (users[i].id === id) {
      user = users[i];
      break;
    }
  }

  res.send(user);
});

// POST user in users
router.post("/", (req, res, next) => {
  const len = users.length;

  const { name, contact, age } = req.body;

  if (name && contact && age) {
    users.push({
      id: (len + 1).toString(),
      name,
      contact,
      age,
    });

    res.send({ message: "user has been created" });
  } else {
    res.send({ message: "error occured during creation" });
  }
});

//UPDATE a user
router.patch("/:id", (req, res, next) => {
  const { id } = req.params;

  const { name, contact, age } = req.body;

  let patched = false;
  users = users.filter((el) => {
    if (el.id === id) {
      patched = true;
      el.name = name;
      el.contact = contact;
      el.age = age;

      return el;
    } else return el;
  });

  if (patched) {
    res.send({
      message: "items is updated",
    });
  } else {
    res.send({
      message: "item was not updated",
    });
  }
});

//DELETE a user

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  users = users.filter((el) => {
    if (el.id !== id) {
      return el;
    } else {
      deleted = true;
    }
  });

  if (deleted) {
    res.send({ message: "delete operation successful" });
  } else {
    res.send({
      message: "delete operation unsuccessful",
    });
  }
});

module.exports = router;
