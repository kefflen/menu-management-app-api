import crypto from 'node:crypto'

export type categoryDTO = {
  _id: string
  name: string
  parent: categoryDTO|null
}

export type createCategoryDTO = Omit<categoryDTO, '_id'>

export default class Category {
  public readonly _id: string
  public name: string
  public parent: Category|null

  constructor({
    _id, name, parent
  }: categoryDTO) {
    this._id = _id
    this.name = name
    this.parent = parent? new Category(parent) : null
  }

  static create({ name, parent }: createCategoryDTO) {
    const _id = crypto.randomUUID()
    return new this({ _id, name, parent })
  }
}