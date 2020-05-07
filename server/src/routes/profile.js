const Router = require('@koa/router');

const { getProfile, updateProfile } = require('../controllers/profile');
const auth = require('../middlewares/auth-middleware');
const router = new Router({ prefix: '/profile' });

router
  .get('/', auth, getProfile)
  .post('/', auth, updateProfile);

module.exports = router;
