const express = require("express");
const router = express.Router();

const users = [];
let profile = {
  first_name: "Suraj",
  last_name: "Murmu",
  email: "surajmurmubusy@gmail.com",
};

let isAuth = false;

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  users.forEach((user) => {
    if (user.username === username && user.password === password) {
      isAuth = true;
    }
  });

  if (isAuth) {
    res.status(200).send({ message: "login successfull" });
  } else {
    res.status(404).send({ message: "credentials wrong" });
  }
});

router.post("/signup", function (req, res) {
  const { username, password } = req.body;

  let found = false;

  users.forEach((user) => {
    if (user.username === username) {
      found = true;
    }
  });

  if (found) {
    res.status(200).send({
      message: "user already exists",
    });
  } else {
    users.push({
      id: Math.floor(Math.random() * 10000).toString(),
      username,
      password,
    });

    res.send({
      message: "user is created",
    });
  }
});

router.get("/profile", (req, res) => {
  //using a middleware is a better option

  if (isAuth) {
    res.send(profile);
  } else {
    res.send({ message: "user is unauthorized" });
  }
});
