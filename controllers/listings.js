const Listing = require("../models/listing");
const { listingSchema } = require("../schema.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  };

module.exports.renderNewForn =  (req, res) => {
    res.render("listings/new.ejs");
  };

module.exports.showListing = 
    async (req, res) => {
        let { id } = req.params;
    
        const listing = await Listing.findById(id)
          .populate({
            path: "reviews",
            populate: {
              path: "author",
            },
          })
          .populate("owner");
        if (!listing) {
          req.flash("error", "Cannot find that listing!");
          res.redirect("/listings");
        }
        res.render("listings/show.ejs", { listing });
      }
  


  module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(url, ".." ,filename);
    // const newListing = new Listing(req.body.listing);
    // newListing.owner = req.user._id;
    // await newListing.save();
    req.flash("success", "Successfully made a new listing!");
    res.redirect("/listings");
  };

  module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Cannot find that listing!");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  }

  module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Successfully updated listing!");
    res.redirect(`/listings/${id}`);
  }

  module.exports.destoryListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Successfully Deleted listing!");
    res.redirect("/listings");
  }