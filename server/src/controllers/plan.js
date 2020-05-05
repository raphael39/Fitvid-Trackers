const { Plan } = require('../models/plan');

const getPlan = async (ctx, next) => {
  // get plan data from db and send in response
};

const getAllPlans = async (ctx, next) => {
  // get plans data from db and send in response
};

const createPlan = async (ctx, next) => {
  // add plan to db
};

const updatePlan = async (ctx, next) => {
  // update plan data from db
};

module.exports = {
  getPlan,
  getAllPlans,
  createPlan,
  updatePlan
};
