import User from '../../entities/User'
import { UserServices } from './UserServices'

export class ListUsersService extends UserServices {
  async execute(): Promise<User[]> {
    const users = await this.userRepository.list()

    return users
  }
}