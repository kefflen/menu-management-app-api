import crypto from 'node:crypto'
import Category from './Category'

export type productDTO = {
  _id: string
  name: string
  qty: number
  price: number
  categories: Category[]
}

export type createProductDTO = Omit<productDTO, '_id'>

export default class Product {
  public readonly _id: string
  public name: string
  public qty: number
  public price: number
  public categories: Category[]

  constructor({ _id, name, qty, price, categories }: productDTO) {
    this._id = _id
    this.name = name
    this.qty = qty
    this.price = price
    this.categories = categories
  }

  static create({ name, qty, price, categories }: createProductDTO) {
    const _id = crypto.randomUUID()

    return new this({ _id, name, qty, price, categories })
  }
}
