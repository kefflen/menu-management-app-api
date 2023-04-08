import crypto from 'node:crypto'

export type categoryDTO = {
  _id: string
  name: string
  parent?: null | parent
}
export type parent = {
  _id: string
  name: string
  parent?: null | string
}
export type createCategoryDTO = Omit<categoryDTO, '_id'>

export default class Category {
  public readonly _id: string
  public name: string
  public parent: parent | null

  constructor({ _id, name, parent }: categoryDTO) {
    this._id = _id
    this.name = name
    this.parent = parent
      ? {
        _id: parent._id,
        name: parent.name,
        parent: parent.parent,
      }
      : null
  }

  static create({ name, parent }: createCategoryDTO) {
    const _id = crypto.randomUUID()
    return new this({ _id, name, parent })
  }
}
