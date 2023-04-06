import User, { createUserDTO } from '../../entities/User'
import IPasswordManager from '../../ports/IPasswordManager'
import IUserRepository from '../../repositories/IUserRepository'

export default class CreateUserService {
  constructor(
    private userRepository: IUserRepository,
    private passwordManager: IPasswordManager
  ) {}
  async execute({ name, password, isAdmin }: createUserDTO): Promise<User> {
    const encryptedPassword = await this.passwordManager.encryptPassword(
      password
    )
    const user = User.create({ name, password: encryptedPassword, isAdmin })
    const createdUser = await this.userRepository.create(user)

    return createdUser
  }
}
