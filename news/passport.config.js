const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const models = require("./models");

passport.serializeUser(function(user, done) {
  console.log("serializeUser");
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  models.User.findById(id, function(err, user) {
    console.log("deserializeUser");
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    models.User.findOne({ username: username }, function(err, user) {
      console.log("--------------------", user);
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);
