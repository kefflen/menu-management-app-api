import Product from '../../entities/Product'
import AppError from '../../errors/AppError'
import ProductServices from './ProductServices'

export default class GetProductByIdService extends ProductServices {
  async execute(_id: string): Promise<Product> {
    const product = await this.productRepository.getById(_id)
    if (product === null) throw AppError.notFound('Product not found')

    return product
  }
}