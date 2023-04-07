import bcryptjs from 'bcryptjs'
import IPasswordManager from '../domain/ports/IPasswordManager'

export default class PasswordManager implements IPasswordManager {
  async encryptPassword(password: string): Promise<string> {
    return await bcryptjs.hash(password, 10)
  }
  async verifyPassword(descriptedPassword: string, encryptedPassword: string): Promise<boolean> {
    return bcryptjs.compare(descriptedPassword, encryptedPassword)
  }
}