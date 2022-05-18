var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Expressjs" });
});

router.get("/authors", (req, res, next) => {
  const authors = [
    { id: 1, author: "R.D. Sharma", book: "Mathematics" },
    { id: 1, author: "H.C. Verma", book: "Mathematics" },
    { id: 1, author: "R.D. Bonk", book: "Mathematics" },
  ];

  res.send(authors);
});

router.get("/users/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  const users = [
    {
      id: "1",
      name: "Suraj",
    },
    {
      id: "2",
      name: "Ajay",
    },
    {
      id: "3",
      name: "Apple",
    },
  ];

  let localUser = {};
  users.forEach((user) => {
    if (user.id === id) {
      localUser = user;
    }
  });

  res.send(localUser);

  // res.send({ message: "user not found" });
});

module.exports = router;
