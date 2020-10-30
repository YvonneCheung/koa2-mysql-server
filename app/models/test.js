var mongoose = require('mongoose'); 
var Person = new mongoose.Schema({ // 实列化mongoose映射
   name : String,
   age : String
});
const Test=mongoose.model('Person',Person)
module.exports = Test
