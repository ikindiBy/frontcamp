const express = require("express");
const app = express();

const ItemNews = require("./models/itemNews");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", (req, res) => {
  const { title, body } = {
    title: "gfh fgh fg",
    body: "mockBody -cvbcvb df  d  vb gh  c f -- lorem ips...."
  };
  ItemNews.create({
    title,
    body
  }).then(itemNews => console.log("new item of news with id = ", itemNews.id));
});

module.exports = app;
