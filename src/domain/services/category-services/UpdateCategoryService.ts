import Category, { categoryDTO, parent } from '../../entities/Category'
import AppError from '../../errors/AppError'
import CategoryServices from './CategoryServices'

type updateCategoryParams = Partial<Omit<categoryDTO, 'parent' | '_id'>> & {
  parentCategoryId?: string
}

export class UpdateCategoryService extends CategoryServices {
  async execute(
    categoryId: string,
    { name, parentCategoryId }: updateCategoryParams
  ): Promise<Category> {
    const category = await this.categoryRepository.getById(categoryId)
    if (category === null) throw AppError.notFound('Category not found')

    let parentCategory: null | Category = null
    if (parentCategoryId) {
      parentCategory = await this.categoryRepository.getById(parentCategoryId)
      if (parentCategory === null) {
        throw AppError.notFound('Category parent not found')
      }
    }
    const parent: parent | null = parentCategory && {
      _id: parentCategory._id,
      name: parentCategory.name,
      parent: parentCategory.parent?._id || null,
    }

    if (name) category.name = name
    if (parentCategory === undefined) category.parent = parent
    const updatedCategory = await this.categoryRepository.update(category)

    return updatedCategory
  }
}
