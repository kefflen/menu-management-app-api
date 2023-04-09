import crypto from 'node:crypto'
import BadSetValueError from '../errors/BadSetValueError'

export type userDTO = {
  _id: string
  email: string
  name: string
  password: string
  isAdmin: boolean
}

type NeverPasswordType<T> = {
  [k in keyof T as k extends 'password' ? never : k]: T[k]
}
export type userWithoutPasswordDTO = NeverPasswordType<userDTO>
export type createUserDTO = Omit<userDTO, '_id'>

export default class User {
  public readonly _id: string
  public readonly email: string
  public name: string
  public isAdmin: boolean
  #password: string | null = null

  constructor({ _id, email, name, password, isAdmin }: userDTO) {
    this._id = _id
    this.name = name
    this.password = password
    this.isAdmin = isAdmin

    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const isNotValidEmail = !emailRegex.test(email)
    if (isNotValidEmail)
      throw BadSetValueError.invalidValueTo('email')
    this.email = email
  }

  static create({ name, email, password, isAdmin }: createUserDTO): User {
    const _id = crypto.randomUUID()
    return new this({ _id, email, name, password, isAdmin })
  }

  toObjectWithoutPassword(): userWithoutPasswordDTO {
    return {
      _id: this._id,
      email: this.email,
      isAdmin: this.isAdmin,
      name: this.name,
    }
  }

  set password(password: string) {
    console.log({ password })
    if (password.length < 5) throw BadSetValueError.invalidValueTo('password')
    this.#password = password
  }

  get password(): string {
    if (this.#password === null)
      throw Error('User cannot instance user without password')
    return this.#password
  }
}
