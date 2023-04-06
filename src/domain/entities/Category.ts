import crypto from 'node:crypto'

export type categoryDTO = {
  id: string
  name: string
  parent: categoryDTO|null
}

export type createCategoryDTO = Omit<categoryDTO, 'id'>

export default class Category {
  public readonly id: string
  public name: string
  public parent: Category|null

  constructor({
    id, name, parent
  }: categoryDTO) {
    this.id = id
    this.name = name
    this.parent = parent? new Category(parent) : null
  }

  static create({ name, parent }: createCategoryDTO) {
    const id = crypto.randomUUID()
    return new this({ id, name, parent })
  }
}