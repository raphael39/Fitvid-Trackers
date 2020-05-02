const { mockPlan } = require('../models/plan');

const getPlan = async (ctx, next) => {
  ctx.body = mockPlan;
};

const getAllPlans = async (ctx, next) => {
  ctx.body = [mockPlan];
};

const createPlan = async (ctx, next) => {
  ctx.body = 'Success';
  ctx.status = 201;
};

const updatePlan = async (ctx, next) => {
  mockPlan = ctx.request.body;
  ctx.body = mockPlan;
  ctx.status = 200;
};

module.exports = {
  getPlan,
  getAllPlans,
  createPlan,
  updatePlan
};
