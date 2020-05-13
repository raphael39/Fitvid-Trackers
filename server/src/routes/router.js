const Router = require('@koa/router');

const planRouter = require('./plan');
const profileRouter = require('./profile');
const workoutRouter = require('./workout');
const loginRouter = require('./login');
const scheduleRouter = require('./schedule');

const router = new Router();

const nestedRoutes = {
  '/plan': planRouter,
  '/profile': profileRouter,
  '/workout': workoutRouter,
  '/login': loginRouter,
  '/schedule': scheduleRouter
};


for (const [path, r] of Object.entries(nestedRoutes)) {
  r.prefix(path);
  router.use(r.routes(), r.allowedMethods());
}



module.exports = router;
