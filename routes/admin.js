const express = require('express');

const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

const products = [];

// GET=> /admin/add-product
router.get('/add-product', (req, res, next) => {
  console.log(' in another middle middleware');
  //   res.send(
  //     `<form action="admin/add-product " method="POST" ><input type="text" name="title"><button>ADD Product</button></form>`
  //   );
  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//POST=> /admin/add-product
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;
