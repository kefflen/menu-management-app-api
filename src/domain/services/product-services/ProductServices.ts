import ICategoryRepository from '../../repositories/ICategoryRepository'
import IProductRepository from '../../repositories/IProductRepository'

export type productServicesDepedencies = {
  productRepository: IProductRepository
  categoryRepository: ICategoryRepository
}

export default abstract class ProductServices {
  protected readonly productRepository: IProductRepository
  protected readonly categoryRepository: ICategoryRepository
  constructor ({ productRepository, categoryRepository }: productServicesDepedencies) {
    this.productRepository = productRepository
    this.categoryRepository = categoryRepository
  }

  abstract execute(...args: unknown[]): Promise<unknown>
}