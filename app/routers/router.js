
'use strict'

const Router = require('koa-router')
const config = require('../../config/config');
const Test = require('../controllers/test')
const router = new Router({
    prefix: config.apiPrefix+'/test', // 统一前缀，接口全部为 /api/xxx 格式
})

router.get('/test', Test.test)
 
module.exports = router;
