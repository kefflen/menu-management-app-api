import Category, { categoryDTO } from '../../entities/Category'
import AppError from '../../errors/AppError'
import CategoryServices from './CategoryServices'

type updateCategoryParams = Partial<Omit<categoryDTO, 'parent'|'id'>> & {
  parentCategoryId?: string
}

export default class UpdateCategoryService extends CategoryServices {
  async execute(categoryId: string, { name, parentCategoryId }: updateCategoryParams): Promise<Category> {
    const category = await this.categoryRepository.getById(categoryId)
    if (category === null) throw AppError.notFound('Category not found')

    let parent: null | Category = null
    if (parentCategoryId) {
      parent = await this.categoryRepository.getById(parentCategoryId)
      if (parent === null) {
        throw AppError.notFound('Category parent not found')
      }
    }

    if (name) category.name = name
    if (parent) category.parent = parent
    const updatedCategory = await this.categoryRepository.update(category)

    return updatedCategory
  }
}