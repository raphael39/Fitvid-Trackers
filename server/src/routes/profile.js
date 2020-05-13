const Router = require('@koa/router');

const { getProfile, updateProfile } = require('../controllers/profile');
const auth = require('../middlewares/auth-middleware');
const jwtMiddleware = require('../middlewares/jwt');

const router = new Router();

router
  .use(jwtMiddleware)
  .use(auth);

router
  .get('/', getProfile)
  .post('/', updateProfile);

module.exports = router;
