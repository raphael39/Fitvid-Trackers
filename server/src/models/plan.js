const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  name: String,
  recurring: Boolean,
  recurring_days: [Number],
  workout_id: mongoose.ObjectId
});

const Plan = mongoose.model('Plan', PlanSchema);

const mockPlan = {
  id: 2,
  name: 'my plan',
  recurring: true,
  recurring_days: [2, 4, 6], // monday, wednesday, friday
  workout_id: 10
};

module.exports = {
  mockPlan,
  Plan
};
