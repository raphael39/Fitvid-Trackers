const mongoose = require('mongoose');

const { WorkoutSchema } = require('./workout');

const PlanSchema = new mongoose.Schema({
  name: String,
  workoutList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }]
});

const Plan = mongoose.model('Plan', PlanSchema);

module.exports = {
  PlanSchema,
  Plan
};
