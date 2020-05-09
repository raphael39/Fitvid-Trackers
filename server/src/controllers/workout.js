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

const getAllWorkouts = async (ctx, next) =>  {
  console.log("getAllWorkouts -> workouts")
  let workouts = await Workout.find();
  if (workouts) {
    ctx.body = workouts;
  } else {
    ctx.status = 404;
  }
}

const createWorkout = async (ctx, next) => {
  console.log('I am here');

  const newWorkout = await Workout.create({...ctx.request.body, createdBy: ctx.user});
  console.log("createWorkout -> ctx.request.body", ctx.request.body)
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
  getAllWorkouts
};
