const User = require("../models/user");









module.exports.signup =async (req, res) => {
    try {
      let { email, username, password } = req.body;
      let newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.login(registeredUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "Welcome to Wanderlust!");
        res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  }


  module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back!");
    // console.log(res.locals.redirectUrl);
    let redirectUrl = res.locals.redirectUrl || "/listings";
    // console.log(redirectUrl);
    res.redirect(redirectUrl);
  }

  module.exports.logout = (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      req.flash("success", "Goodbye!");
      res.redirect("/listings");
    });
  }