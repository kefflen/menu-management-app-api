import ProductServices from './ProductServices'

export class DeleteProductService extends ProductServices {
  async execute(productId: string): Promise<void> {
    await this.productRepository.delete(productId)
  }
}