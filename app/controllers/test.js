var mongoose = require('mongoose'); 

exports.users = async (ctx, next) => {
  ctx.body = {
    success: true,
    data:'success'
  }
}
