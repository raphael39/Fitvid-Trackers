const jwtDecode = require('jwt-decode');

function authHeaderErr (ctx, message) {
  ctx.set('WWW-Authenticate', 'Bearer');
  ctx.throw(401, );
};

const authorize = async (ctx, next) => {
  if (!ctx.headers.authorization) authHeaderErr(ctx, 'Missing authentication token');

  const token = ctx.headers.authorization;
  let decodedToken;

  try {
    decodedToken = jwtDecode(token);
    ctx.user = decodedToken.googleId;
  } catch (error) {
    authHeaderErr(ctx, 'Invalid token provided');
  }

  return await next();
};

module.exports = authorize;
