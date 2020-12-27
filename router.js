import Router from 'koa-router'
import multer from '@koa/multer'

import { jwt } from './middlewares'
import { PostController, SessionController } from './controllers'

const router = new Router()
const upload = multer({ dest: 'uploads/' })

router.post('/login', SessionController.create);
router.get('/posts', PostController.index)
router.get('/posts/:id', PostController.show)

router.post('/posts', jwt, upload.single('image'), PostController.create)
router.del('/posts/:id', jwt, PostController.destroy)

export default router
