const { Schedule } = require('../models/schedule');

const getSchedule = async (ctx, next) => {
  const schedule = await Schedule.findOne({ userId: ctx.user }).populate('map.workouts');
  console.log(schedule);
};

const updateSchedule = async (ctx, next) => {
  const update = { ...ctx.request.body, userId: ctx.user };
  console.log(update);
  await Schedule.findOneAndUpdate({ userId: ctx.user }, update, {
    new: true,
    upsert: true
  });
};

module.exports = {
  getSchedule,
  updateSchedule
};
