import { Schema, model } from 'mongoose'

const CategorySchema = new Schema({
  _id: {
    type: 'string',
    required: true,
  },
  name: {
    type: 'string',
    required: true,
  },
  parentId: {
    type: String,
    ref: 'Category'
  },
})

export default model('Category', CategorySchema)