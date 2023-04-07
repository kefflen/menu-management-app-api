import User, { createUserDTO } from '../../entities/User'
import { UserServices } from './UserServices'

export class CreateUserService extends UserServices{
  async execute({ name, email, password, isAdmin }: createUserDTO): Promise<User> {
    const encryptedPassword = await this.passwordManager.encryptPassword(
      password
    )
    const user = User.create({ name, email, password: encryptedPassword, isAdmin })
    const createdUser = await this.userRepository.create(user)

    return createdUser
  }
}
