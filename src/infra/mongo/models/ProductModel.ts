import { Schema, model } from 'mongoose'
import { productDTO } from '../../../domain/entities/Product'

const ProductSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true,
  },
  categories: [{
    type: String,
    ref: 'Category',
  }]
})

export default model<productDTO>('Product', ProductSchema)