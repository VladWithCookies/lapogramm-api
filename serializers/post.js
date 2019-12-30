import JSONAPISerializer from 'jsonapi-serializer'

const PostSerializer = new JSONAPISerializer.Serializer('posts', {
  attributes: ['filename', 'description', 'createdAt'],
  keyForAttribute: 'camelCase'
})

export default PostSerializer
