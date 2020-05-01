import Router from '@koa/router';
import queryString from 'query-string';

const router = new Router();
const plan = new Router({ prefix: '/plan' });
const profile = new Router({ prefix: '/profile' });
const calendar = new Router({ prefix: '/calendar'});
const user = new Router({ prefix: '/user' });
const workout = new Router({ prefix: '/workout' });

router.get('/google_authcb', (ctx, next) => {
  ctx.type = 'html';
  ctx.body = `<p>You have been authenticated with Google.</p><p>Your authentication code is: ${queryString.parse(ctx.request.querystring).code}</p>`;
})
router.get('/google_test', (ctx, next) => {


  ctx.type = 'html';
  ctx.body = '<a href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&response_type=code&client_id=382468121294-bdf3bk9esrafq76l98g1tv2ahb5ukstc.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fgoogle_authcb">Log in with Google</a>';
})

router.post('/login', (ctx, next) => {});
router.post('/sign-up', (ctx, next) => {});

plan
  .post('/', (ctx, next) => {})
  .get('/:id', (ctx, next) => {})
  .post('/:id', (ctx, next) => {})
  .get('/all', (ctx, next) => {});

workout
  .get('/:id', (ctx, next) => {})
  .post('/', (ctx, next) => {});

profile
  .get('/', (ctx, next) => {})
  .post('/', (ctx, next) => {});

calendar
  .get('/day/:day', (ctx, next) => {})
  .get('/week/:week', (ctx, next) => {})
  .get('/month/:month', (ctx, next) => {});

user
  .get('/:id', (ctx, next) => {})
  .get('/all', (ctx, next) => {});

const nestedRoutes = [plan, profile, calendar, user, workout];
for (const r of nestedRoutes) {
  router.use(r.routes(), r.allowedMethods());
}

export default router;
