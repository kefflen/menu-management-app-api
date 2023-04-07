import crypto from 'node:crypto'

export type userDTO = {
  _id: string
  email: string
  name: string
  password: string
  isAdmin: boolean
}

export type createUserDTO = Omit<userDTO, '_id'>

export default class User {
  public readonly _id: string
  public readonly email: string
  public name: string
  public password: string
  public isAdmin: boolean
  constructor({ _id, email, name, password, isAdmin }: userDTO) {
    this._id = _id
    this.email = email
    this.name = name
    this.password = password
    this.isAdmin = isAdmin
  }

  static create({ name, email, password, isAdmin }: createUserDTO): User {
    const _id = crypto.randomUUID()
    return new this({ _id, email, name, password, isAdmin })
  }
}
