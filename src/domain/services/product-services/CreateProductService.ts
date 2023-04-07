import Category from '../../entities/Category'
import Product, { createProductDTO } from '../../entities/Product'
import ProductServices from './ProductServices'

type createProductParams = Omit<createProductDTO, 'categories'> & {
  categoryIds: string[]
}

export class CreateProductService extends ProductServices {
  async execute({
    name,
    price,
    qty,
    categoryIds,
  }: createProductParams): Promise<Product> {
    const categories: Category[] = await this.getCategoriesByIds(categoryIds)

    const product = Product.create({ name, price, qty, categories })
    const createdProduct = await this.productRepository.create(product)

    return createdProduct
  }
}
