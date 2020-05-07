const Router = require('@koa/router');

const { getSchedule, updateSchedule } = require('../controllers/schedule');
const auth = require('../middlewares/auth-middleware');

const router = new Router({ prefix: '/schedule' });

router
  .get('/', auth, getSchedule)
  .post('/', auth, updateSchedule);

module.exports = router;
