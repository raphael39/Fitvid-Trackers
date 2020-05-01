import Router from '@koa/router';

const router = new Router();
const routine = new Router({ prefix: '/routine' });
const profile = new Router({ prefix: '/profile' });
const calendar = new Router({ prefix: '/calendar'});
const user = new Router({ prefix: '/user' });

router.post('/login', (ctx, next) => {});
router.post('/sign-up', (ctx, next) => {});

routine
  .post('/', (ctx, next) => {})
  .get('/:id', (ctx, next) => { })
  .post('/:id', (ctx, next) => {})
  .get('/all', (ctx, next) => {});

profile
  .get('/', (ctx, next) => {})
  .post('/', (ctx, next) => {});

calendar
  .get('/day/:day', (ctx, next) => {})
  .get('/week/:week', (ctx, next) => {})
  .get('/month/:month', (ctx, next) => {});

user
  .get('/:id', (ctx, next) => {})
  .get('/all', (ctx, next) => {});

const nestedRoutes = [routine, profile, calendar, user];
for (const r of nestedRoutes) {
  router.use(r.routes(), r.allowedMethods());
}

export default router;
