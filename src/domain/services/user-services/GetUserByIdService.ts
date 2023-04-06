import User from '../../entities/User'
import AppError from '../../errors/AppError'
import { UserServices } from './UserServices'

export class GetUserByIdService extends UserServices {
  async execute(id: string): Promise<User> {
    const user = await this.userRepository.getById(id)
    if (user === null) throw AppError.notFound('User not found')

    return user
  }
}