import crypto from 'node:crypto'
import Category from './Category'

export type productDTO = {
  id: string
  name: string
  qty: number
  price: number
  categories: Category[]
}

export type createProductDTO = Omit<productDTO, 'id'>

export default class Product {
  public readonly id: string
  public name: string
  public qty: number
  public price: number
  public categories: Category[]

  constructor({ id, name, qty, price, categories }: productDTO) {
    this.id = id
    this.name = name
    this.qty = qty
    this.price = price
    this.categories = categories
  }

  static create({ name, qty, price, categories }: createProductDTO) {
    const id = crypto.randomUUID()
    
    return new this({ id, name, qty, price, categories })
  }
}
