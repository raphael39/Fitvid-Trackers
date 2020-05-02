const Router = require('@koa/router');

const planRouter = require('./plan');
const profileRouter = require('./profile');
const workoutRouter = require('./workout');

const router = new Router();
const calendar = new Router({ prefix: '/calendar'});
const user = new Router({ prefix: '/user' });

router.post('/login', (ctx, next) => {});
router.post('/sign-up', (ctx, next) => {});

calendar
  .get('/day/:day', (ctx, next) => {})
  .get('/week/:week', (ctx, next) => {})
  .get('/month/:month', (ctx, next) => {});

user
  .get('/:id', (ctx, next) => {})
  .get('/all', (ctx, next) => {});

const nestedRoutes = [planRouter, profileRouter, workoutRouter, calendar, user];
for (const r of nestedRoutes) {
  router.use(r.routes(), r.allowedMethods());
}

module.exports = router;
