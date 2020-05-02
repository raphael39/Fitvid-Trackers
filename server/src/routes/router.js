const Router = require('@koa/router');
const queryString = require('query-string');
const googleAuth = require('../services/google-auth');

const router = new Router();
const plan = new Router({ prefix: '/plan' });
const profile = new Router({ prefix: '/profile' });
const calendar = new Router({ prefix: '/calendar' });
const user = new Router({ prefix: '/user' });
const workout = new Router({ prefix: '/workout' });
const login = new Router({ prefix: '/login' });

login
  .get('/google', (ctx, next) => {
    const url = googleAuth.getAuthUrl();

    ctx.type = 'html';
    ctx.body = `<a href="${url}">Log in with Google</a>`;
  })
  .get('/google-cb', async (ctx, next) => {

    const googleAuthCode = queryString.parse(ctx.request.querystring).code;
    const user = await googleAuth.getGoogleAccountFromCode(googleAuthCode);

    ctx.type = 'html';
    ctx.body = `<p>You have been authenticated with Google.</p><p>Your authentication code is: ${googleAuthCode}</p><p>You are:${JSON.stringify(user)}</p>`;
  })


router.post('/login', (ctx, next) => { });
router.post('/sign-up', (ctx, next) => { });

plan
  .post('/', (ctx, next) => { })
  .get('/:id', (ctx, next) => { })
  .post('/:id', (ctx, next) => { })
  .get('/all', (ctx, next) => { });

workout
  .get('/:id', (ctx, next) => { })
  .post('/', (ctx, next) => { });

profile
  .get('/', (ctx, next) => { })
  .post('/', (ctx, next) => { });

calendar
  .get('/day/:day', (ctx, next) => { })
  .get('/week/:week', (ctx, next) => { })
  .get('/month/:month', (ctx, next) => { });

user
  .get('/:id', (ctx, next) => { })
  .get('/all', (ctx, next) => { });

const nestedRoutes = [plan, profile, calendar, user, workout, login];
for (const r of nestedRoutes) {
  router.use(r.routes(), r.allowedMethods());
}

module.exports = router;
