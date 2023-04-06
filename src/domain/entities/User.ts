export type userDTO = {
  id?: string
  name: string
  password: string
  isAdmin: boolean
}

export default class User {
  public readonly id?: string
  public name: string
  public password: string
  public isAdmin: boolean
  constructor({ id, name, password, isAdmin }: userDTO) {
    this.id = id
    this.name = name
    this.password = password
    this.isAdmin = isAdmin
  }
}
