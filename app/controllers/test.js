var mongoose = require('mongoose'); 

exports.users = async (ctx, next) => {
  ctx.body = {
    success: true,
    data:'success'
  }
}
/**
 * 更新用户信息操作
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.update = async (ctx, next) => {
  var body = ctx.request.body
  var user = ctx.session.user
  // var fields = 'avatar,gender,age,nickname,breed'.split(',')

  // fields.forEach(function(field) {
  //   if (body[field]) {
  //     user[field] = xss(body[field].trim())
  //   }
  // })
  user = await user.save()
  ctx.body = {
    success: true,
    data: {
      user_id: user.nickname,
      user_name: user.user_name,
      user_password: user.avatar,
      user_email: user.age,
      user_avatar: user.breed,
      user_registration_time: user.gender,
      _id: user._id,
      user_link:user.user_link
    }
  }
}
