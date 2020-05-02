const Router = require('@koa/router');

const { getPlan, getAllPlans, createPlan, updatePlan } = require('../controllers/plan');

const router = new Router({ prefix: '/plan' });

router
  .post('/', createPlan)
  .get('/:id', getPlan)
  .post('/:id', updatePlan)
  .get('/all', getAllPlans);

module.exports = router;
