const express = require("express");
const router = express.Router();
const models = require("../models");

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

router.get("/", (req, res) => {
  models.ItemNews.find({}).then(articles => {
    // res.render("index", { articles: articles });
    res.send({ articles: articles });
  });
});

router.get("/createArticle", (req, res) => {
  res.render("createArticle");
});

router.post("/createArticle", (req, res) => {
  const {
    heading,
    content,
    description,
    publishedAt,
    author,
    urlToImage
  } = req.body;

  if (heading && description) {
    models.ItemNews.create({
      heading,
      content,
      description,
      publishedAt,
      author,
      urlToImage
    }).then(itemNews =>
      console.log("new item of news with id = ", itemNews.id)
    );
    // res.redirect("/");
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
  const {
    heading,
    content,
    description,
    publishedAt,
    author,
    urlToImage
  } = req.body;

  if (heading && content) {
    models.ItemNews.where({ _id: req.params.id })
      .update({
        heading,
        content,
        description,
        publishedAt,
        author,
        urlToImage
      })
      .then(() => console.log(" upDATEd well  "));
    res.redirect("/");
  }
});

router.get("/deleteArticle/:id", (req, res) => {
  models.ItemNews.deleteOne({ _id: req.params.id }, err => {
    if (err) console.log(err);
    res.redirect("/");
  });
});

router.delete("/deleteArticle/:id", (req, res) => {
  models.ItemNews.deleteOne({ _id: req.params.id }, err => {
    if (err) console.log(err);
    // res.redirect("/");
  });
});

module.exports = router;
