import Category from '../../entities/Category'
import Product, { productDTO } from '../../entities/Product'
import AppError from '../../errors/AppError'
import ProductServices from './ProductServices'

type updateProductParams = Partial<Omit<productDTO, '_id'|'categories'>> & {
  categoryIds?: string[]
}

export default class UpdateProductService extends ProductServices {
  async execute(productId: string, {
    name, price, qty, categoryIds
  }: updateProductParams): Promise<Product> {
    const product = await this.productRepository.getById(productId)

    if (product === null) throw AppError.notFound('Product not found')

    let categories: null | Category[] = null
    if (categoryIds) {
      categories = await this.getCategoriesByIds(categoryIds)
    }

    if (name) product.name = name
    if (price) product.price = price
    if (qty) product.qty = qty
    if (categories) product.categories = categories

    const updatedProduct = await this.productRepository.update(product)

    return updatedProduct
  }
}