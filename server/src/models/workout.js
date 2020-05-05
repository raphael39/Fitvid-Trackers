const mongoose = require('mongoose');

const WorkoutSchema = mongoose.Schema({
  name: String,
  youtube_link: String,
  tags: [String],
  length: Number,
  difficulty: String,
  description: String,
  thumbnail: String,
  created_by: mongoose.ObjectId
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = {
  Workout
};
