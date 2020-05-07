const Router = require('@koa/router');

const { getPlan, getAllPlans, createPlan, updatePlan } = require('../controllers/plan');
const auth = require('../middlewares/auth-middleware');
const router = new Router({ prefix: '/plan' });

router
  .post('/', auth, createPlan)
  .get('/:id', auth, getPlan)
  .post('/:id', auth, updatePlan)
  .get('/all', auth, getAllPlans);

module.exports = router;
