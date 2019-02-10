const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

const routes = require("./routes");

require("./passport.config");

/* add template EJS*/
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    secret: "keyWord",
    store: new FileStore(),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      path: "/"
    }
  })
);

/* routes */
app.use("/", routes.articles);
// app.use("/auth", routes.auth);

app.post("/auth", (req, res, next) => {
  passport.authenticate("local", function(err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send("Give other user's data!");
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/admin");
    });
  })(req, res, next);
});

const authent = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect("/");
  }
};

app.get("/admin", (req, res) => {
  // app.get("/admin", authent, (req, res) => {
  res.send("Admin hello");
});

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = app;
