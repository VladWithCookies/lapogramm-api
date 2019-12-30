import Router from 'koa-router'
import multer from '@koa/multer'

import { PostController } from './controllers'

const router = new Router()
const upload = multer({ dest: 'uploads/' })

router.get('/posts', PostController.index)
router.get('/posts/:id', PostController.show)
router.post('/posts', upload.single('image'), PostController.create)
router.del('/posts/:id', PostController.destroy)

export default router
