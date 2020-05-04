const { mockProfile } = require('../models/profile');

const getProfile = async (ctx, next) => {
  ctx.body = mockProfile;
};

const updateProfile = async (ctx, next) => {
  const updatedMockProfile = ctx.request.body;
  ctx.body = updatedMockProfile;
  ctx.status = 200;
}

const createProfile = async (ctx, next) => {
  const createdMockProfile = ctx.request.body;
  ctx.body = createdMockProfile;
  ctx.status = 200;
}

module.exports = {
  getProfile,
  updateProfile,
  createProfile
};
