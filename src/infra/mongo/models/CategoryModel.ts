import { Schema, model } from 'mongoose'
import { categoryDTO } from '../../../domain/entities/Category'

const CategorySchema = new Schema({
  _id: {
    type: 'string',
    required: true,
  },
  name: {
    type: 'string',
    required: true,
  },
  parent: {
    type: String,
    ref: 'Category'
  },
})

export default model<categoryDTO>('Category', CategorySchema)