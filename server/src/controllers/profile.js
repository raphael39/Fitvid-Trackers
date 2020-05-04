const { mockProfile } = require('../models/profile');

const getProfile = async (ctx, next) => {
  ctx.body = mockProfile;
};

const updateProfile = async (ctx, next) => {
  const updatedMockProfile = ctx.request.body;
  ctx.body = updatedMockProfile;
  ctx.status = 200;
}

const createProfile = async (googleId, email, firstName, lastName) => {
  // add logic to create profile in DB
}

module.exports = {
  getProfile,
  updateProfile,
  createProfile
};
