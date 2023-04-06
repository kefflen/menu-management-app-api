import Product from '../../entities/Product'
import ProductServices from './ProductServices'

export default class ListProductsService extends ProductServices {
  async execute(): Promise<Product[]> {
    return this.productRepository.list()
  }
}