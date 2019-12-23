import Router from 'koa-router'

import { PostController } from './controllers'
const router = new Router()

router.get('/posts', PostController.index)
router.get('/posts/:id', PostController.show)
router.post('/posts', PostController.create)

export default router
