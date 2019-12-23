import Koa from 'koa'
import logger from 'koa-logger'
import BodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'

import router from './router'

const APP_PORT = 3001
const DATABASE_URL = 'mongodb://localhost:27017/lapogramm'
const app = new Koa()

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(logger())
app.use(BodyParser())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(APP_PORT)
