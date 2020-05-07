const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  email: String,
  token: String,
  schedule: {type: mongoose.Schema.Types.ObjectId, ref: 'Schedule'}
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = {
  ProfileSchema,
  Profile,
};
