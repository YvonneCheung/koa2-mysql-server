
'use strict'

const Router = require('koa-router')
const config = require('../../config/config');
const Test = require('../controllers/test')
const User = require('../controllers/user')

const router = new Router({
    prefix: config.node.apiPrefix, // 统一前缀，接口全部为 /api/xxx 格式
})
 
  // user
  // router.post('/u/signup', App.hasBody, User.signup)
  // router.post('/u/update', App.hasBody, App.hasToken, User.update)

  // DB Interface test
  router.get('/test/user/users',User.users)
  router.post('/test/user/add',User.addUser)
  router.post('/test/user/delete',User.deleteUser)
  router.get('/test/users',Test.test)
 
module.exports = router;
