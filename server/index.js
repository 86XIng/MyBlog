const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import dbConfig from './dbs/config'
import article from './interface/article'
import tag from './interface/tags'
import upload from './interface/upload'
import koaBody from 'koa-body'
const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
  // app.use(bodyParser({
  //   extendTypes:['json','form','text']
  // }))
  app.proxy = true
  app.use(koaBody({
    multipart: true
  }))
  app.use(json())
  mongoose.connect(dbConfig.dbs,{
    useNewUrlParser:true,
    useFindAndModify:true
  })
  app.use(article.routes()).use(article.allowedMethods())
  app.use(tag.routes()).use(tag.allowedMethods())
  app.use(upload.routes()).use(upload.allowedMethods())
  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server


  

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
