import JSONAPISerializer from 'jsonapi-serializer'

const PostSerializer = new JSONAPISerializer.Serializer('posts', {
  attributes: ['description']
})

export default PostSerializer
