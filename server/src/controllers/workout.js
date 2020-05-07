const { Workout } = require('../models/workout');
const { Profile } = require('../models/profile');
const { isValidObjectId } = require('../helpers/mongoose-helpers');

const getWorkout = async (ctx, next) => {
  const id = ctx.params.id;
  let wo;
  if (isValidObjectId(id)) {
    wo = await Workout.findOne({ _id: id, createdBy: ctx.user });
  }
  if (wo) {
    ctx.body = wo;
  } else {
    ctx.status = 404;
  }
};

const createWorkout = async (ctx, next) => {
  const newWorkout = await Workout.create({...ctx.request.body, createdBy: ctx.user});
  ctx.body = newWorkout._id;
  ctx.status = 201;
};

module.exports = {
  getWorkout,
  createWorkout
};
