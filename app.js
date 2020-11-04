const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const serve = require('koa-static')
const config = require('./config/config')
const router = require('./app/routers/router')

// midleware
app.use(serve('./assets'))
app.use(cors()) 
app.use(router.routes()).use(router.allowedMethods())
app.listen(config.port)

