import IJwtManager from '../../ports/IJwtManager'
import IPasswordManager from '../../ports/IPasswordManager'
import IUserRepository from '../../repositories/IUserRepository'

export type authServicesDepedencies = {
  jwtManager: IJwtManager
  passwordManager: IPasswordManager
  userRepository: IUserRepository
}

export default abstract class AuthServices {
  protected jwtManager: IJwtManager
  protected userRepository: IUserRepository
  protected passwordManager: IPasswordManager

  constructor({
    jwtManager,
    userRepository,
    passwordManager,
  }: authServicesDepedencies) {
    this.jwtManager = jwtManager
    this.userRepository = userRepository
    this.passwordManager = passwordManager
  }

  abstract execute(...args: unknown[]): Promise<unknown>
}
