import User, { userDTO } from '../../entities/User'
import AppError from '../../errors/AppError'
import { UserServices } from './UserServices'

type updateUserParam = Partial<Pick<userDTO, 'name'>>
export default class UpdateUserService extends UserServices {
  async execute(userId: string, { name }: updateUserParam): Promise<User> {
    const user = await this.userRepository.getById(userId)
    if (user === null) throw AppError.notFound('User not found')
    if (name) user.name = name
    const updatedUser = await this.userRepository.update(user)

    return updatedUser
  }
}
