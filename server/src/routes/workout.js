const Router = require('@koa/router');

const { getWorkout, createWorkout } = require('../controllers/workout');

const router = new Router({ prefix: '/workout' });

router
  .get('/:id', getWorkout)
  .post('/', createWorkout);

module.exports = router;
