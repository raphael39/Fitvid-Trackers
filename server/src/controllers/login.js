const queryString = require('query-string');
const googleAuth = require('../services/google-auth');
const profile = require('../controllers/profile');
const jwtDecode = require('jwt-decode');

const sendToGoogle = async (ctx, next) => {
  const url = googleAuth.getAuthUrl();
  ctx.redirect(url);
}

const processGoogleCb = async (ctx, next) => {
  const googleAuthCode = queryString.parse(ctx.request.querystring).code;
  const tokens = await googleAuth.getGoogleTokens(googleAuthCode);
  const token = tokens.id_token;
  const decodedToken = jwtDecode(token);

  const googleId = decodedToken.sub;
  const firstName = decodedToken.given_name;
  const lastName = decodedToken.family_name;
  const email = decodedToken.email;

  // check if user exists, create if not
  if (!profile.getProfile(googleId)) {
    profile.createProfile(googleId, email, firstName, lastName);
  }
  // then set token for user

  ctx.redirect(`${process.env.CLIENT_URL}/setCredentials?token=${tokens.id_token}`);
}

module.exports = {
  sendToGoogle,
  processGoogleCb
};
