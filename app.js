import Koa from 'koa'
import cors from '@koa/cors'
import serve from 'koa-static'
import logger from 'koa-logger'
import mongoose from 'mongoose'

import router from './router'

const APP_PORT = 3001
const DATABASE_URL = 'mongodb://localhost:27017/lapogramm'
const app = new Koa()

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors())
app.use(logger())
app.use(router.routes())
app.use(serve('./uploads'))
app.use(router.allowedMethods())

app.listen(APP_PORT)
