const { Workout } = require('../models/workout');
const { Profile } = require('../models/profile');
const { isValidObjectId } = require('../helpers/mongoose-helpers');

const getWorkout = async (ctx, next) => {
  const id = ctx.params.id;
  let wo;
  if (isValidObjectId(id)) {
    wo = await Workout.findOne({ _id: id, createdBy: ctx.user._id });
  }
  if (wo) {
    ctx.body = wo;
  } else {
    ctx.status = 404;
  }
};

const getAllWorkouts = async (ctx, next) =>  {
  let workouts = await Workout.find().or([{ createdBy: ctx.user._id }, { isPublic: true }]);
  ctx.body = workouts;
};

const getMyWorkouts = async (ctx, next) =>  {
  let workouts = await Workout.find( { createdBy: ctx.user._id } );
  if (workouts) {
    ctx.body = workouts;
  } else {
    ctx.status = 404;
  }
};

const createWorkout = async (ctx, next) => {
  const newWorkout = await Workout.create({...ctx.request.body, createdBy: ctx.user});
  ctx.body = newWorkout._id;
  ctx.status = 201;
};

const updateWorkout = async (ctx, next) => {
  const id = ctx.params.id;
  let wo;
  if (isValidObjectId(id)) {
    wo = await Workout.findOneAndUpdate({ _id: id }, ctx.request.body);
    ctx.status = 200;
  } else {
    ctx.status = 404;
  }
};

module.exports = {
  getWorkout,
  createWorkout,
  updateWorkout,
  getAllWorkouts,
  getMyWorkouts
};
