import Category from '../../entities/Category'
import Product, { createProductDTO } from '../../entities/Product'
import AppError from '../../errors/AppError'
import ProductServices from './ProductServices'

type createProductParams = Omit<createProductDTO, 'categories'> & {
  categoryIds: string[]
}

export default class CreateProductService extends ProductServices {
  async execute({
    name,
    price,
    qty,
    categoryIds,
  }: createProductParams): Promise<Product> {
    const categories: Category[] = await Promise.all(
      categoryIds.map(async (categoryId) => {
        const category = await this.categoryRepository.getById(categoryId)
        if (!category) throw AppError.notFound('Category not found')
        return category
      })
    )

    const product = Product.create({ name, price, qty, categories })
    const createdProduct = await this.productRepository.create(product)

    return createdProduct
  }
}
