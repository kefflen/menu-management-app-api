import crypto from 'node:crypto'

export type userDTO = {
  id: string
  email: string
  name: string
  password: string
  isAdmin: boolean
}

export type createUserDTO = Omit<userDTO, 'id'>

export default class User {
  public readonly id: string
  public readonly email: string
  public name: string
  public password: string
  public isAdmin: boolean
  constructor({ id, email, name, password, isAdmin }: userDTO) {
    this.id = id
    this.email = email
    this.name = name
    this.password = password
    this.isAdmin = isAdmin
  }

  static create({ name, email, password, isAdmin }: createUserDTO): User {
    const id = crypto.randomUUID()
    return new this({ id, email, name, password, isAdmin })
  }
}
