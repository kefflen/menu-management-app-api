import AppError from '../../errors/AppError'
import AuthServices from './AuthServices'

export class VerifyAuthTokenService extends AuthServices {
  async execute(bearerToken: string): Promise<string> {
    if (!bearerToken.startsWith('Bearer '))
      throw AppError.unauthorized('Invalid token')

    const [_, token] = bearerToken.split(' ')
    const userId = await this.jwtManager.verifyToken(token)

    if (userId === null) throw AppError.unauthorized('Invalid token')

    return userId
  }
}
