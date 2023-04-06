import ProductServices from './ProductServices'

export default class DeleteProductService extends ProductServices {
  async execute(productId: string): Promise<void> {
    await this.productRepository.delete(productId)
  }
}