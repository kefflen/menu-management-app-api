import IPasswordManager from '../../ports/IPasswordManager'
import IUserRepository from '../../repositories/IUserRepository'

export type userServicesDepedencies = {
  userRepository: IUserRepository
  passwordManager: IPasswordManager
}

export abstract class UserServices {
  protected readonly userRepository: IUserRepository
  protected readonly passwordManager: IPasswordManager

  constructor({
    passwordManager, userRepository
  }: userServicesDepedencies) {
    this.userRepository = userRepository
    this.passwordManager = passwordManager
  }

  abstract execute(...args: unknown[]): Promise<unknown>
}
