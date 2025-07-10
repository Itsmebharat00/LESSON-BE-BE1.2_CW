/** @format */

const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
  },
  profilePicUrl: {
    type: String,
    require: true,
  },
  followingCount: {
    type: Number,
  },
  followerCount: {
    type: Number,
  },
  companyName: {
    type: String,
  },
  location: {
    type: String,
  },
  portfolioUrl: {
    type: String,
  },
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
