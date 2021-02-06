const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      db.Employee.findOne({
        email: email,
      })
        .then(function (dbUser) {
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect email.",
            });
          } else {
            bcrypt.compare(password, dbUser.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                return done(null, dbUser);
              } else {
                return done(null, false, { message: "Wrong Password" });
              }
            });
          }
        })
        .catch((err) => {
          return done(null, false, { message: err });
        });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  db.Employee.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
