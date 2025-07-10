/** @format */
const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const Movie = require("./models/movie.models");
const Profile = require("./models/profile.models");
initializeDatabase();

const jsonData = fs.readFileSync("movies.json", "utf-8");

const profileJsonData = fs.readFileSync("profiles.json", "utf-8");
const profilesData = JSON.parse(profileJsonData);

const moviesData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const movieData of moviesData) {
      const newMovie = new Movie({
        title: movieData.title,
        releaseYear: movieData.releaseYear,
        genre: movieData.genre,
        director: movieData.director,
        actors: movieData.actors,
        language: movieData.language,
        country: movieData.country,
        plot: movieData.plot,
        awards: movieData.awards,
        posterUrl: movieData.posterUrl,
        trailerUrl: movieData.trailerUrl,
      });
      console.log(newMovie.title);
    }
  } catch (error) {
    console.log("Error");
  }
}

function profileSeedData() {
  try {
    for (const profileData of profilesData) {
      const newProfile = new Profile({
        fullName: profileData.fullName,
        userName: profileData.username,
        bio: profileData.bio,
        profilePicUrl: profileData.profilePicUrl,
        followingCount: profileData.followingCount,
        followerCount: profileData.followerCount,
        companyName: profileData.companyName,
        location: profileData.location,
        portfolioUrl: profileData.portfolioUrl,
      });

      console.log(newProfile.fullName);
    }
  } catch (error) {
    console.log("Error", error);
  }
}

seedData();
profileSeedData();
