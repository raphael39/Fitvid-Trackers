const { Workout } = require('../models/workout');

const getWorkout = async (ctx, next) => {
  // get workout data from db and send in response
};

const createWorkout = async (ctx, next) => {
  // add workout data to db
};

module.exports = {
  getWorkout,
  createWorkout
};
