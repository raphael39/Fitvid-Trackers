const db = monk(process.env.MONGODB_URL || 'localhost/movied');
const User = db.get('users');

function authHeaderErr (ctx) {
  ctx.set('WWW-Authenticate', 'Basic');
  ctx.throw(401, 'Missing basic authentication header');
};

const wrongCredentialsMsg = 'Incorrect user or password';

const authorize = async (ctx, next) => {
  if (!ctx.headers.authorization) authHeaderErr(ctx);
  const basic = ctx.headers.authorization.split(' ');
  if (basic.length < 2 && basic[0]!=='Basic') authHeaderErr(ctx);
  const [username, password] = atob(basic[1]).split(':');
  const user = await User.findOne({username});
  ctx.assert(user, 401, wrongCredentialsMsg);
  const match = await bcrypt.compare(password, user.password);
  ctx.assert(match, 401, wrongCredentialsMsg);
  ctx.user = user;
  return await next();
};

module.exports = authorize;
