const Router = require('@koa/router');

const { getWorkout, createWorkout, updateWorkout } = require('../controllers/workout');
const auth = require('../middlewares/auth-middleware');
const router = new Router({ prefix: '/workout' });

router
  .get('/:id', auth, getWorkout)
  .post('/:id', auth, updateWorkout)
  .post('/', auth, createWorkout);

module.exports = router;
