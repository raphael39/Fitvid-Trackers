const { mockProfile } = require('../models/profile');

const getProfile = async (ctx, next) => {
  ctx.body = mockProfile;
};

const updateProfile = async (ctx, next) => {
  mockProfile = ctx.request.body;
  ctx.body = mockProfile;
  ctx.status = 200;
}

module.exports = {
  getProfile,
  updateProfile
};
