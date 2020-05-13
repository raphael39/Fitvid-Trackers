const Router = require('@koa/router');

const { getPlan, getAllPlans, createPlan, updatePlan, getMyPlans, deletePlan } = require('../controllers/plan');
const auth = require('../middlewares/auth-middleware');
const jwtMiddleware = require('../middlewares/jwt');

const router = new Router();

router
  .use(jwtMiddleware)
  .use(auth);

router
  .post('/', createPlan)
  .get('/all', getAllPlans)
  .get('/my', getMyPlans)
  .get('/:id', getPlan)
  .post('/:id', updatePlan)
  .delete('/:id', deletePlan);

module.exports = router;
