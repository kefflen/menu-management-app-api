import User, { userDTO } from '../../entities/User'
import AppError from '../../errors/AppError'
import { UserServices } from './UserServices'

type updateUserParam = Pick<userDTO, 'id' | 'name'>
export default class UpdateUserService extends UserServices {
  async execute({ id, name }: updateUserParam): Promise<User> {
    const user = await this.userRepository.getById(id)
    if (user === null) throw AppError.notFound('User not found')
    user.name = name
    const updatedUser = await this.userRepository.update(user)
    
    return updatedUser
  }
}
