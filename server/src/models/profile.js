const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  email: String,
  token: String
});

const Profile = mongoose.model('Profile', ProfileSchema);

const mockProfile = {
  googleId: 114902049679094897975,
  firstName: "Petr",
  LastName: "Penicka",
  email: 'petr.penicka@gmail.com',
  token: "laskjdf082fdf02jdfmn02mn8"
};

module.exports = {
  mockProfile,
  Profile,
};
