const express = require("express");

const path = require("path");

const router = express.Router();

// GET=> /admin/add-product
router.get("/add-product", (req, res, next) => {
  console.log(" in another middle middleware");
  //   res.send(
  //     `<form action="/add-product " method="POST" ><input type="text" name="title"><button>ADD Product</button></form>`
  //   );
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

//POST=> /admin/add-product
router.post("/add-products", (req, res, next) => {
  console(req.body);
  res.redirect("/");
});
module.exports = router;
