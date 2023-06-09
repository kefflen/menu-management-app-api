import { userWithoutPasswordDTO } from '../../entities/User'
import AppError from '../../errors/AppError'
import { UserServices } from './UserServices'

export class GetUserByIdService extends UserServices {
  async execute(_id: string): Promise<userWithoutPasswordDTO> {
    const user = await this.userRepository.getById(_id)
    if (user === null) throw AppError.notFound('User not found')

    return user.toObjectWithoutPassword()
  }
}