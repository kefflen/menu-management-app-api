import User from '../../../domain/entities/User'
import AppError from '../../../domain/errors/AppError'
import IUserRepository from '../../../domain/repositories/IUserRepository'
import UserModel from '../models/UserModel'

export default class MongoUserRepository implements IUserRepository {
  async create(user: User): Promise<User> {
    const userDTO = await UserModel.create(user)
    return new User(userDTO)
  }

  async list(): Promise<User[]> {
    const usersDTO = await UserModel.find()
    return usersDTO.map((userDTO) => new User(userDTO))
  }

  async getById(userId: string): Promise<User | null> {
    const userDTO = await UserModel.findById(userId)
    if (!userDTO) return null
    return new User(userDTO)
  }

  async update(user: User): Promise<User> {
    const { _id, ...otherProps } = user
    await UserModel.updateOne({ _id }, otherProps)
    const userDTO = await UserModel.findById(_id)
    if (!userDTO) throw AppError.notFound('User not found')

    return new User(userDTO)
  }

  async delete(userId: string): Promise<void> {
    await UserModel.deleteOne({ _id: userId })
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const userDTO = await UserModel.findOne({ email })

    if (!userDTO) return null
    return new User(userDTO)
  }
}
