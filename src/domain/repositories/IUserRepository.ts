import User from '../entities/User'

export default interface IUserRepository {
  create(user: User): Promise<User>
  getById(id: number): Promise<User | null>
  update(user: User): Promise<User>
  delete(id: number): Promise<void>
}
