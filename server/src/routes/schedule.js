const Router = require('@koa/router');

const { getSchedule, updateSchedule } = require('../controllers/schedule');
const auth = require('../middlewares/auth-middleware');
const jwtMiddleware = require('../middlewares/jwt');

const router = new Router();

router
  .use(jwtMiddleware)
  .use(auth);

router
  .get('/', getSchedule)
  .post('/', updateSchedule);

module.exports = router;
