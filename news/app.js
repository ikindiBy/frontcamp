const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const routes = require("./routes");

const models = require("./models");

/* add template EJS*/
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

/*
app.get("/", (req, res) => {
  res.send("Hello World!");
});
*/

/* with template from EJS*/
// app.get("/", (req, res) => res.render("index", { data: data }));

// routes
app.use("/", routes.articles);

module.exports = app;
