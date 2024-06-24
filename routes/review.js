const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing");
const { isLoggedIn , isReviewAuthor } = require("../middleware.js");
const { validateReview } = require("../middleware.js");

  const reviewController = require("../controllers/reviews.js");




//REVIEWS
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));
  
  
  //delete review route
  router.delete("/:reviewId",isLoggedIn,isReviewAuthor , wrapAsync(reviewController.destoryReview));
  
  module.exports = router;