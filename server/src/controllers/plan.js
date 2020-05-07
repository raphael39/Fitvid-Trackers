const { Plan } = require('../models/plan');

const getPlan = async (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = await Plan.findOne({ _id: id }).populate('workoutList.Workout');
};

const getAllPlans = async (ctx, next) => {
  ctx.body = await Plan.find();
};

const createPlan = async (ctx, next) => {
  await Plan.create(ctx.request.body);
};

const updatePlan = async (ctx, next) => {
  const id = ctx.params.id;
  await Plan.findOneAndUpdate({ _id: id }, ctx.request.body);
};

module.exports = {
  getPlan,
  getAllPlans,
  createPlan,
  updatePlan
};
