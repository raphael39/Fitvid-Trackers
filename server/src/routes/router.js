const Router = require('@koa/router');

const router = new Router();
const plan = new Router({ prefix: '/plan' });
const profile = new Router({ prefix: '/profile' });
const calendar = new Router({ prefix: '/calendar'});
const user = new Router({ prefix: '/user' });
const workout = new Router({ prefix: '/workout' });

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

module.exports = router;
