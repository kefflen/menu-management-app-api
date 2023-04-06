export default interface IPasswordManager {
  encryptPassword(password: string): Promise<string>
  verifyPassword(
    descriptedPassword: string,
    encryptedPassword: string
  ): Promise<boolean>
}
