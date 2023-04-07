import { LoginService, VerifyAuthTokenService } from '../domain/services/auth-services'
import { authServicesDepedencies } from '../domain/services/auth-services/AuthServices'
import JwtManager from '../infra/JwtManager'
import PasswordManager from '../infra/PasswordManager'
import MongoUserRepository from '../infra/mongo/repositories/MongoUserRepository'

export default function makeAuthServices() {
  const depedencies: authServicesDepedencies = {
    jwtManager: new JwtManager(),
    passwordManager: new PasswordManager(),
    userRepository: new MongoUserRepository()
  }

  return {
    loginService: new LoginService(depedencies),
    verifyAuthTokenService: new VerifyAuthTokenService(depedencies)
  }
}