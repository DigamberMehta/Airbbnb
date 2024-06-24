const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { savedRedirectedUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");
const user = require("../models/user.js");





router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(userController.signup));

router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

router.post(
  "/login",
  savedRedirectedUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

router.get("/logout", userController.logout);

module.exports = router;
