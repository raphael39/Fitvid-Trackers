require('dotenv').config();
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const router = require('./routes/router.js');

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.SERVER_PORT);
console.log(`Server listening on ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);

