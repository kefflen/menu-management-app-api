import Product from '../entities/Product'
import IEntityRepository from './IEntityRepository'

export default interface IProductRepository extends IEntityRepository<Product> {}