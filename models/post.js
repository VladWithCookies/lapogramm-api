import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  description: {
    type: String,
    max: 250,
  },
})

const PostModel = mongoose.model('Post', PostSchema)

export default PostModel
