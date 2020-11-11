const Validator = require('validator');
const IS = require('is');

module.exports = function validator (data) {
    // 传入的数据就是用户数据，用data进行接收，有req.body传入的
    const errors = {};
    if (!Validator.isLength(data.article_title, {min: 2, max: 30})) {
        errors.name = '名字的长度不能小于2位并且不能大于30位！';
    }
    return {
        errors: errors,
        isValid: IS.empty(errors), // 写一个isEmpty方法，判断当前errors里面有没有内容
    };
};
