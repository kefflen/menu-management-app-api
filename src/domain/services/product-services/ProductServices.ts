import IProductRepository from '../../repositories/IProductRepository'

export type productServicesDepedencies = {
  productRepository: IProductRepository
}

export default abstract class ProductServices {
  protected readonly productRepository: IProductRepository
  constructor ({ productRepository }: productServicesDepedencies) {
    this.productRepository = productRepository
  }

  abstract execute(...args: unknown[]): Promise<unknown>
}