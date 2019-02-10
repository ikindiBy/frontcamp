const express = require("express");
const router = express.Router();
const passport = require("passport");
const models = require("../models");
/*
router.post("/auth", (req, res, next) => {
  passport.authenticate("local", function(err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send("Give user");
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/users/ + user.username");
    });
  })(req, res, next);
});
*/
// router.post("/auth", passport.authenticate("local"), function(req, res) {
//   // If this function gets called, authentication was successful.
//   // `req.user` contains the authenticated user.
//   console.log("+=================== ");
//   res.redirect("/users/" + req.user.username);
// });

module.exports = router;
