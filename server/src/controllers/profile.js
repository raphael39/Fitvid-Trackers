const { Profile } = require('../models/profile');

const getProfile = async (ctx, next) => {
  // get profile data from db and send in response
};

const updateProfile = async (ctx, next) => {
  // update profile data in db
}

const createProfile = async (googleId, email, firstName, lastName) => {
  // add logic to create profile in DB
}

module.exports = {
  getProfile,
  updateProfile,
  createProfile
};
