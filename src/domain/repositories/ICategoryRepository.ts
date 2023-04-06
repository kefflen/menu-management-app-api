import Category from '../entities/Category'
import IEntityRepository from './IEntityRepository'

export default interface ICategoryRepository extends IEntityRepository<Category> {}