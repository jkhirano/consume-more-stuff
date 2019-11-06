const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);

const saltRounds = 12;
const User = require("./database/models/User");

const dotenv = require("dotenv").config();

const client = redis.createClient({ url: process.env.REDIS_URL });

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(decorator);

app.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.send({ message: "You have not been authenticated" });
  }
}

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password"
//     },
//     function(email, password, done) {
//       return new User({ email })
//         .fetch()
//         .then(user => {
//           console.log("FOO");
//           console.log(user);
//           if (user === null) {
//             console.log("null user");
//             return done(null, false, { message: "bad username or password" });
//           } else {
//             user = user.toJSON();
//             bcrypt.compare(password, user.password).then(res => {
//               // Happy route: email exists, password matches
//               if (res) {
//                 return done(null, user); // this is the user that goes to serializeUser()
//               }
//               // Error Route: email exists, password does not match
//               else {
//                 console.log("bad username or password");
//                 return done(null, false, {
//                   message: "bad username or password"
//                 });
//               }
//             });
//           }
//         })
//         .catch(err => {
//           console.log("error: ", err);
//           return done(err);
//         });
//     }
//   )
// );

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      User.findOne({ email }, function(err, user) {
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
    }
  )
);

passport.serializeUser(function(user, done) {
  console.log("serializing");
  return done(null, { id: user.id, email: user.email });
});

passport.deserializeUser(function(user, done) {
  console.log("deserializing");
  console.log(user);
  return done(null, user);
});

app.use(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/loginfailed.html"
  })
);

app.post("/register", (req, res) => {
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
          return res.send({ message: "User created" });
        })
        .catch(err => {
          console.log(err);
          return res.send("Error creating account");
        });
    });
  });
});

app.get("/secret", isAuthenticated, (req, res) => {
  return res.send("You found the secret!");
});

app.get("/logout", (req, res) => {
  req.logout();
  res.send("logged out");
});

app.get("/", (req, res) => {
  return res.json({ message: "hiyee" });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
