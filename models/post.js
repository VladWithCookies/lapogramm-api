import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  description: {
    type: String,
    max: 250,
  },
  filename: {
    type: String,
    required: true,
  },
})

const PostModel = mongoose.model('Post', PostSchema)

export default PostModel
