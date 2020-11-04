const mysql = require('../lib/mysql') //引入数据库方法
// const jwt = require('jsonwebtoken')
const config = require('../../config/config')
const apiError = require('../error/apiError.js')
// const moment = require('moment')

exports.test = async (ctx, next) => {
  try{
    await mysql.query('SELECT * FROM xm_users WHERE user_id="15465"').then(res=>{
      if(res){
        ctx.body = apiError.getSuccessInfo(res)
      } else {
        ctx.body = ApiErrorNames.getErrorInfo(ApiErrorNames.INVALID_TOKEN)
      }
    }).catch(err => {
      ctx.body = ApiErrorNames.getErrorInfo(ApiErrorNames.DATA_IS_WRONG)
    })
  }catch(error) {
    ctx.throw(500)
}
}
