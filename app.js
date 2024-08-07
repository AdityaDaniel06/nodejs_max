// importing core modules fs, os, http , https etc to use them in this file
const express = require("express");
const path = require("path");
const fs = require("fs");
const http = require("http");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

// use allows to add new middleware functions: ORDER MATTERs
// app.use((req, res, next) => {
//   // callback function willbe executed for every incoming request
//   console.log(" in the middle middleware");
//   next(); // allows the request to continue to the next middleware
// });

// app.get("/products", (req, res, next) => {
//   console(req.body);
//   res.redirect("/");
// });

// app.use("/", (req, res, next) => {
//   res.send(`<h1>hello from api</h1>`);
// });
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000); // does the same thing as above 2 lines.
