const Router = require('@koa/router');

const { getProfile, updateProfile } = require('../controllers/profile');

const router = new Router({ prefix: '/profile' });

router
  .get('/', getProfile)
  .post('/', updateProfile);

module.exports = router;
