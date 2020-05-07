const mongoose = require('mongoose');

const { ProfileSchema } = require('./profile');

const WorkoutSchema = mongoose.Schema({
  name: String,
  description: String,
  difficulty: String,
  type: String,
  youtubeId: String,
  tags: [String],
  length: Number,
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
  exercises: [{
    name: String,
    sets: Number,
    reps: Number,
    timestamp: Number
  }],
  public: Boolean
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = {
  WorkoutSchema,
  Workout
};
