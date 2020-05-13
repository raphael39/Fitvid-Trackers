require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const mongoose = require('mongoose');

const router = require('./routes/router.js');

const app = new Koa();

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('connnected to db');
  }
} );


app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.SERVER_PORT);
console.log(`Server listening on ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
