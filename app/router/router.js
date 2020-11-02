
'use strict'

const Router = require('koa-router')
const config = require('../../config/config');
const Test = require('../controllers/test')

const router = new Router({
    prefix: config.node.apiPrefix, // 统一前缀，接口全部为 /api/xxx 格式
})
 
  // user
  // router.post('/u/signup', App.hasBody, User.signup)
  // router.post('/u/update', App.hasBody, App.hasToken, User.update)

  // DB Interface test
  router.post('/test/user/update',Test.update)
  router.get('/test/user/users',Test.users)
 
module.exports = router;
