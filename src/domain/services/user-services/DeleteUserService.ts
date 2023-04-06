import { UserServices } from './UserServices'

export default class DeleteUserService extends UserServices {
  async execute(userId: string): Promise<void> {
    await this.userRepository.delete(userId)
  }
}