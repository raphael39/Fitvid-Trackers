module.exports = require('koa-jwt')({ secret: process.env.SERVER_JWT_SECRET, key: 'jwtdata'});
