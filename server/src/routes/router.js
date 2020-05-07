const Router = require('@koa/router');

const planRouter = require('./plan');
const profileRouter = require('./profile');
const workoutRouter = require('./workout');
const loginRouter = require('./login');
const scheduleRouter = require('./schedule');

const router = new Router();

const nestedRoutes = [planRouter, profileRouter, workoutRouter, loginRouter, scheduleRouter];

for (const r of nestedRoutes) {
  router.use(r.routes(), r.allowedMethods());
}

module.exports = router;
