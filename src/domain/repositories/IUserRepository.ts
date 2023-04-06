import User from '../entities/User'
import IEntityRepository from './IEntityRepository'

export default interface IUserRepository extends IEntityRepository<User> {}
