const mongoose = require('mongoose');

const { ProfileSchema } = require('./profile');

const WorkoutSchema = mongoose.Schema({
  name: String,
  description: String,
  difficulties: { easy: Boolean, medium: Boolean, hard: Boolean },
  type: String,
  youtubeId: String,
  tags: [String],
  length: Number,
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
  exercises: [{
    name: String,
    sets: Number,
    reps: Number,
    timestamp: String,
  }],
  isPublic: Boolean
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = {
  WorkoutSchema,
  Workout
};
