import Category from '../../entities/Category'
import AppError from '../../errors/AppError'
import CategoryServices from './CategoryServices'

export class GetCategoryByIdService extends CategoryServices {
  async execute(id: string): Promise<Category> {
    const category = await this.categoryRepository.getById(id)
    if (category === null) throw AppError.notFound('Category not found')

    return category
  }
}