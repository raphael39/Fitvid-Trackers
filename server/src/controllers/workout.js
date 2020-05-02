const { mockWorkout } = require('../models/workout');

const getWorkout = async (ctx, next) => {
  ctx.body = mockWorkout;
};

const createWorkout = async (ctx, next) => {
  ctx.body = 'Success';
  ctx.status = 201;
};

module.exports = {
  getWorkout,
  createWorkout
};
