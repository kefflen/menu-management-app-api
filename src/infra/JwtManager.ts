import jwt from 'jsonwebtoken'
import IJwtManager from '../domain/ports/IJwtManager'

export default class JwtManager implements IJwtManager {
  async generateToken(subject: string): Promise<string> {
    const SECRET_KEY = process.env.SECRET_KEY
    if (!SECRET_KEY) throw Error('Missing SECRET_KEY')

    const token = jwt.sign({ userId: subject }, SECRET_KEY, {
      subject,
      expiresIn: '1h',
    })

    return token
  }

  async verifyToken(token: string): Promise<string | null> {
    const SECRET_KEY = process.env.SECRET_KEY
    if (!SECRET_KEY) throw Error('Missing SECRET_KEY')

    try {
      const { userId } = jwt.verify(token, SECRET_KEY) as { userId: string }
      return userId
    } catch (err) {
      return null
    }
  }
}
