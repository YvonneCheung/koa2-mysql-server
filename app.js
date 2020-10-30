const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const serve = require('koa-static')
const config = require('./config/config')
const router = require('./app/router/router')
const mongoConf = require('./config/mongo')

mongoConf.connect()


// midleware
app.use(serve('./assets'))
app.use(cors()) 
app.use(router.routes()).use(router.allowedMethods())

app.listen(config.node.port)

