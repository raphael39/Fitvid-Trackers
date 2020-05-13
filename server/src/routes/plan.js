const Router = require('@koa/router');

const { getPlan, getAllPlans, createPlan, updatePlan, getMyPlans, deletePlan } = require('../controllers/plan');
const auth = require('../middlewares/auth-middleware');
const router = new Router({ prefix: '/plan' });

router
  .post('/', auth, createPlan)
  .get('/all', auth, getAllPlans)
  .get('/my', auth, getMyPlans)
  .get('/:id', auth, getPlan)
  .post('/:id', auth, updatePlan)
  .delete('/:id', auth, deletePlan);

module.exports = router;
