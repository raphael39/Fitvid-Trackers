const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  email: String,
  token: String
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = {
  Profile,
};
