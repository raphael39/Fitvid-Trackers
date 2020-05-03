const queryString = require('query-string');
const googleAuth = require('../services/google-auth');

const sendToGoogle = async (ctx, next) => {
  const url = googleAuth.getAuthUrl();
  ctx.redirect(url);
}

const processGoogleCb = async (ctx, next) => {
  const googleAuthCode = queryString.parse(ctx.request.querystring).code;
  const user = await googleAuth.getGoogleAccountFromCode(googleAuthCode);
  console.log("user", user)
  ctx.redirect(`http://localhost:3000/setCredentials?token=${user.tokens}&userid=${user.id}`);
}

module.exports = {
  sendToGoogle,
  processGoogleCb
};
