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
  models.ItemNews.find({}, (err, articles) => {
    if (articles.length) {
      res.send(articles);
    } else {
      res.sendStatus(404);
    }
  });
});

/** it is for template on back-end side */
// router.get("/createArticle", (req, res) => {
//   res.render("createArticle");
// });

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

/** it is for template on back-end side */
// router.get("/updateArticle/:id", (req, res) => {
//   models.ItemNews.findById(req.params.id, function(err, article) {
//     const { title, body } = article;
//     res.render("updateArticle", {
//       titleToUpdate: title,
//       bodyToUpdate: body
//     });
//   });
// });

router.put("/updateArticle/:id", (req, res) => {
  const {
    heading,
    content,
    description,
    publishedAt,
    author,
    urlToImage
  } = req.body;

  if (heading && content) {
    models.ItemNews.updateOne(
      { _id: req.params.id },
      {
        $set: {
          heading,
          content,
          description,
          publishedAt,
          author,
          urlToImage
        }
      },
      (err, article) => {
        if (err || !article) {
          res.status(400).send(err);
        } else {
          res.status(200).send(article);
          // res.redirect("/");/** it is for template on back-end side */
        }
      }
    );
  }
});

/** it is for template on back-end side */
// router.get("/deleteArticle/:id", (req, res) => {
//   models.ItemNews.deleteOne({ _id: req.params.id }, err => {
//     if (err) console.log(err);
//     res.redirect("/");
//   });
// });

router.delete("/deleteArticle/:id", (req, res) => {
  models.ItemNews.deleteOne({ _id: req.params.id }, err => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.sendStatus(200);
    }
    // res.redirect("/"); /** it is for template on back-end side */
  });
});

module.exports = router;
