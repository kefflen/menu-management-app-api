
export default interface IJwtManager {
  generateToken(subject: string): Promise<string>
  verifyToken(token: string): Promise<string|null>
}