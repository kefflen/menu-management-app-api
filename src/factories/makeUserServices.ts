import CreateUserService from '../domain/services/user-services/CreateUserServices'
import DeleteUserService from '../domain/services/user-services/DeleteUserService'
import { GetUserByIdService } from '../domain/services/user-services/GetUserByIdService'
import ListUsersService from '../domain/services/user-services/ListUsersService'
import UpdateUserService from '../domain/services/user-services/UpdateUserService'
import { userServicesDepedencies } from '../domain/services/user-services/UserServices'
import PasswordManager from '../infra/PasswordManager'
import MongoUserRepository from '../infra/mongo/repositories/MongoUserRepository'

export default function makeUserServices() {
  const depedencies: userServicesDepedencies = {
    passwordManager: new PasswordManager(),
    userRepository: new MongoUserRepository()
  }

  return {
    createUserService: new CreateUserService(depedencies),
    deleteUserService: new DeleteUserService(depedencies),
    updateUserService: new UpdateUserService(depedencies),
    getUserByIdService: new GetUserByIdService(depedencies),
    ListUsersService: new ListUsersService(depedencies),
  }
}
