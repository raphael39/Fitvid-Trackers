const jwtDecode = require('jwt-decode');
const { Profile } = require('../models/profile');

function authHeaderErr (ctx, message) {
  ctx.set('WWW-Authenticate', 'Bearer');
  ctx.throw(401, message);
};

const authorize = async (ctx, next) => {

  if (!ctx.headers.authorization) authHeaderErr(ctx, 'Missing authentication token');

  const token = ctx.headers.authorization;
  let decodedToken;

  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    authHeaderErr(ctx, 'Invalid token provided');
  }

  const profileObj = await Profile
    .findOne({googleId: decodedToken.sub})
    .select('-token -__v -googleId'); // removes unneeded model details from response
  if (profileObj) {
    ctx.user = profileObj;
  } else {
    authHeaderErr(ctx, 'Profile does not exist');
  }

  return await next();
};

module.exports = authorize;
