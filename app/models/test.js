var mongoose = require('mongoose'); 
var Person = new mongoose.Schema({ // 实列化mongoose映射
   name : String,
   age : String
});

// Defines a pre hook for the document.
UserSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
})

const Test=mongoose.model('Person',Person)
module.exports = Test
