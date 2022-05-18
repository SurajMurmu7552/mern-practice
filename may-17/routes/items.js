var express = require("express");
var router = express.Router();

let itemsList = [
  {
    id: "fsdr3e",
    item: "Logitech G G345",
    price: "Rs 499.00",
  },
  {
    id: "dsfef",
    item: "Lenovo Ideapad",
    price: "Rs 49900.00",
  },
  {
    id: "dfsdfs",
    item: "Dell Vostro",
    price: "Rs 56669.00",
  },
];

/* GET home page. */

//get all list items
router.get("/", function (req, res, next) {
  res.send(itemsList);
});

//insert an element to the list
router.post("/", (req, res, next) => {
  const { item, price } = req.body;
  console.log(item, price);

  if (typeof item === "string" && typeof price === "string") {
    itemsList.push({
      id: Math.floor(Math.random() * 1000).toString(),
      item,
      price,
    });
    res.send({ message: "item added to the list" });
  } else {
    res.send({ message: "items couldn't be added to the list" });
  }
});

//get a single item in itemList

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  let item = {};

  itemsList.forEach((el) => {
    if (el.id === id) {
      item = el;
    }
  });

  res.send(item);
});

//patch the single item with id

router.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  const { item, price } = req.body;

  let patched = false;
  itemsList = itemsList.filter((el) => {
    if (el.id !== id) return el;
    else {
      console.log(el);
      patched = true;

      (el.item = item), (el.price = price);

      return el;
    }
  });

  if (patched) {
    res.send({ message: "the item has been updated" });
  } else {
    res.send({ message: "the item was not updated" });
  }
});

//delete an item from the list

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  let deleted = false;
  itemsList = itemsList.filter((el) => {
    if (el.id != id) return id;
    else {
      deleted = true;
    }
  });

  if (deleted) {
    res.send({ message: "the item has been deleted" });
  } else {
    res.send({ message: "the item was not deleted" });
  }
});

module.exports = router;
