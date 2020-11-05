const db = require('../lib/db'); // 引入数据库方法
const apiError = require('../error/apiError.js');
const Utils = require('../lib/utils');
// const jwt = require('jsonwebtoken')
// const moment = require('moment')

exports.getArticles = async (ctx, next) => {
  try {
    await db.query('SELECT * FROM xm_articles').then(res=>{
      if (res) {
        ctx.body = apiError.getSuccessInfo(res);
      } else {
        ctx.body = apiError.getErrorInfo(apiError.INVALID_TOKEN);
      }
    }).catch(err => {
      ctx.body = apiError.getErrorInfo(apiError.DATA_IS_WRONG);
    });
  } catch (error) {
    ctx.throw(500);
}
};

exports.addArticles = async (ctx, next) => {
  const fields = Object.keys(ctx.request.body).join(',');
  const values = Object.values(ctx.request.body).join(',');
//   ctx.body = values;
//   console.log(values);
  try {
    await db.query(`INSERT INTO xm_articles(${fields}) VALUES(${values})`).then(res=>{
      if (res) {
        ctx.body = apiError.getSuccessInfo(res);
      } else {
        ctx.body = apiError.getErrorInfo(apiError.INVALID_TOKEN);
      }
    }).catch(err => {
      ctx.body = apiError.getErrorInfo(apiError.DATA_IS_WRONG);
    });
  } catch (error) {
    ctx.throw(500);
}
};
