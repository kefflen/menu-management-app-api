import crypto from 'node:crypto'

export type userDTO = {
  id: string
  name: string
  password: string
  isAdmin: boolean
}

export type createUserDTO = Omit<userDTO, 'id'>

export default class User {
  public readonly id: string
  public name: string
  public password: string
  public isAdmin: boolean
  constructor({ id, name, password, isAdmin }: userDTO) {
    this.id = id
    this.name = name
    this.password = password
    this.isAdmin = isAdmin
  }

  static create({ name, password, isAdmin }: createUserDTO): User {
    const id = crypto.randomUUID()
    return new this({ id, name, password, isAdmin })
  }
}
