
'use strict';

const Router = require('koa-router');
const config = require('../../config/config');
const article = require('../controllers/article');
const router = new Router({
    prefix: config.apiPrefix + '/article', // 统一前缀，接口全部为 /api/xxx 格式
});

router.get('/list', article.getArticles);
router.post('/add', article.addArticles);
module.exports = router;
