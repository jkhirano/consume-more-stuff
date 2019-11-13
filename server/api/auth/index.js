const express = require("express");
const router = express.Router();

//authentication dependencies
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const saltRounds = 12;
const User = require("../../database/models/User");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const dotenv = require("dotenv").config();
const client = redis.createClient({ url: process.env.REDIS_URL });

router.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

router.use(passport.initialize());
router.use(passport.session());

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.send({ message: "You have not been authenticated" });
  }
}
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      return new User({ email })
        .fetch({ require: false })
        .then(user => {
          if (user === null) {
            console.log("user not found");
            return done(null, false, { message: "bad username or password" });
          } else {
            user = user.toJSON();
            bcrypt.compare(password, user.password).then(res => {
              // Happy route: email exists, password matches
              if (res) {
                return done(null, user); // this is the user that goes to serializeUser()
              }
              // Error Route: email exists, password does not match
              else {
                console.log("bad password");
                return done(null, false, {
                  message: "bad username or password"
                });
              }
            });
          }
        })
        .catch(err => {
          console.log("error: ", err);
          return done(err);
        });
    }
  )
);

passport.serializeUser(function(user, done) {
  console.log("serializing, user: ");
  console.log(user);
  return done(null, { id: user.id, email: user.email });
});

passport.deserializeUser(function(user, done) {
  console.log("deserializing, user: ");
  console.log(user);
  return done(null, user);
});

router.use(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login.html"
  })
);

router.get("/smoke", (req, res) => {
  return res.json({ message: "I see smoke in auth." });
});

router.post("/register", (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      console.log(err);
    } // return 500
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {
        console.log(err);
      } // return 500
      return new User({
        email: req.body.email,
        password: hash,
        user_status_id: 1
      })
        .save()
        .then(user => {
          console.log(user);
          return res.status(200);
        })
        .catch(err => {
          console.log(err);
          return res.send("Error creating account");
        });
    });
  });
});

router.get("/secret", isAuthenticated, (req, res) => {
  return res.send("You found the secret!");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send("logged out");
});

module.exports = router;
