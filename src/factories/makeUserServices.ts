import { CreateUserService, DeleteUserService, UpdateUserService, GetUserByIdService, ListUsersService } from '../domain/services/user-services'
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
