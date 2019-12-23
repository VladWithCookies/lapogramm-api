import { Post } from '../models'
import { PostSerializer } from '../serializers'

class PostController {
  index = async (context) => {
    const posts = await Post.find()

    context.body = PostSerializer.serialize(posts)
  }

  show = async (context) => {
    const post = await Post.findById(context.params.id)

    context.body = PostSerializer.serialize(post)
  }

  create = async (context) => {
    const post = await Post.create(context.request.body)

    context.body = PostSerializer.serialize(post)
  }
}

export default new PostController()
