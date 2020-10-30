const mongoose = require('mongoose').set('debug', true);
const config = require('../config/config')
const url = config.node.db
const options = {
    autoReconnect: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
// mongoose.connect(config.node.db,{ useNewUrlParser: true,useUnifiedTopology: true },function(){
//   console.log('connection is success')
// })
module.exports = {
    connect: ()=> {            
        mongoose.connect(url,options)
        let db = mongoose.connection
        db.on('error', console.error.bind(console, '连接错误:'));
        db.once('open', ()=> {
            console.log('mongodb connect suucess');
        })
    }
}
