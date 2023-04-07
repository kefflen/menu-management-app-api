import User from '../../entities/User'
import AppError from '../../errors/AppError'
import AuthServices from './AuthServices'

type loginServiceParams = {
  email: string
  password: string
}

type loginServiceReturn = {
  user: User,
  token: string
}

export class LoginService extends AuthServices {
  async execute({ email, password}: loginServiceParams): Promise<loginServiceReturn> {
    const user = await this.userRepository.getUserByEmail(email)
    if (user === null) throw AppError.unauthorized('Invalid password or email provided')

    const isValidPassword = await this.passwordManager.verifyPassword(password, user.password)
    if (isValidPassword === false) throw AppError.unauthorized('Invalid password or email provided')

    const jwtToken = await this.jwtManager.generateToken(user._id)

    return {
      user, token: jwtToken
    }
  }
}