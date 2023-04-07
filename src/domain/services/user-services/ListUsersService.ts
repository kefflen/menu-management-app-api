import { userWithoutPasswordDTO } from '../../entities/User'
import { UserServices } from './UserServices'

export class ListUsersService extends UserServices {
  async execute(): Promise<userWithoutPasswordDTO[]> {
    const users = await this.userRepository.list()

    return users.map(user => user.toObjectWithoutPassword())
  }
}