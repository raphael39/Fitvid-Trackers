const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  name: String,
  recurring: Boolean,
  recurring_days: [Number],
  workout_id: mongoose.ObjectId
});

const Plan = mongoose.model('Plan', PlanSchema);

module.exports = {
  Plan
};
