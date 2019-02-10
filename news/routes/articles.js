const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/", (req, res) => {
  models.ItemNews.find({}).then(articles => {
    res.render("index", { articles: articles });
  });
});

router.get("/createArticle", (req, res) => res.render("createArticle"));

router.post("/createArticle", (req, res) => {
  const { title, body } = req.body;
  if (title && body) {
    models.ItemNews.create({
      title,
      body
    }).then(itemNews =>
      console.log("new item of news with id = ", itemNews.id)
    );
    res.redirect("/");
  }
});

router.get("/updateArticle/:id", (req, res) => {
  models.ItemNews.findById(req.params.id, function(err, article) {
    const { title, body } = article;
    res.render("updateArticle", {
      titleToUpdate: title,
      bodyToUpdate: body
    });
  });
});

router.post("/updateArticle/:id", (req, res) => {
  const { title, body } = req.body;
  if (title && body) {
    models.ItemNews.where({ _id: req.params.id })
      .update({ title, body })
      .then(() => console.log(" upDATEd   "));
    res.redirect("/");
  }
});

router.get("/deleteArticle/:id", (req, res) => {
  console.log("DELETE  id = ", req.params.id);
  models.ItemNews.deleteOne({ _id: req.params.id }, err => {
    if (err) console.log(err);
    res.redirect("/");
  });
});

module.exports = router;
