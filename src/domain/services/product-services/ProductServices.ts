import Category from '../../entities/Category'
import AppError from '../../errors/AppError'
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

  protected getCategoriesByIds(categoryIds: string[]): Promise<Category[]> {
    return Promise.all(
      categoryIds.map(async (categoryId) => {
        const category = await this.categoryRepository.getById(categoryId)
        if (!category) throw AppError.notFound('Category not found')
        return category
      })
    )
  }

  abstract execute(...args: unknown[]): Promise<unknown>
}