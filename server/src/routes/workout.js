const Router = require('@koa/router');

const { getWorkout, createWorkout } = require('../controllers/workout');
const auth = require('../middlewares/auth-middleware');
const router = new Router({ prefix: '/workout' });

router
  .get('/:id', auth, getWorkout)
  .post('/', auth, createWorkout);

module.exports = router;
