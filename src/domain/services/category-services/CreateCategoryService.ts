import Category, { parent } from '../../entities/Category'
import { categoryDTO } from '../../entities/Category'
import { createCategoryDTO } from '../../entities/Category'
import AppError from '../../errors/AppError'
import CategoryServices from './CategoryServices'

type createCategoryParams = Omit<createCategoryDTO, 'parent'> & {
  parentCategoryId?: string
}

export class CreateCategoryService extends CategoryServices {
  async execute({
    name, parentCategoryId
  }: createCategoryParams): Promise<Category> {
    let parentCategory: null|categoryDTO = null

    if (parentCategoryId) {
      parentCategory = await this.categoryRepository.getById(parentCategoryId)
      if (parentCategory === null) {
        throw AppError.notFound('Category parent not found')
      }
    }
    const parent: parent|null = parentCategory && {
      _id: parentCategory._id,
      name: parentCategory.name,
      parent: parentCategory.parent?._id || null
    }

    const category = Category.create({ name, parent })
    const createdCategory = await this.categoryRepository.create(category)

    return createdCategory
  }
}