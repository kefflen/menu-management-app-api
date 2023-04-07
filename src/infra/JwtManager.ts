import jwt from 'jsonwebtoken'
import IJwtManager from '../domain/ports/IJwtManager'

export default class JwtManager implements IJwtManager {
  async generateToken(subject: string): Promise<string> {
    const SECRET_KEY = process.env.SECRET_KEY
    if (!SECRET_KEY) throw Error('Missing SECRET_KEY')

    const token = jwt.sign(subject, SECRET_KEY, {
      subject, expiresIn: '1d'
    })

    return token
  }

  async verifyToken(token: string): Promise<string | null> {
    const SECRET_KEY = process.env.SECRET_KEY
    if (!SECRET_KEY) throw Error('Missing SECRET_KEY')

    try {
      const payload = jwt.verify(token, SECRET_KEY) as string

      return payload
    } catch (err) {
      return null
    }
  }

}