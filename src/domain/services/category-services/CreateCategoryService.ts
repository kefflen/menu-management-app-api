import Category from '../../entities/Category'
import { categoryDTO } from '../../entities/Category'
import { createCategoryDTO } from '../../entities/Category'
import AppError from '../../errors/AppError'
import CategoryServices from './CategoryServices'

type createCategoryParams = Omit<createCategoryDTO, 'parent'> & {
  parentCategoryId?: string
}

export default class CreateCategoryService extends CategoryServices {
  async execute({
    name, parentCategoryId
  }: createCategoryParams): Promise<Category> {
    let parent: null|categoryDTO = null

    if (parentCategoryId) {
      parent = await this.categoryRepository.getById(parentCategoryId)
      if (parent === null) {
        throw AppError.notFound('Category parent not found')
      }
    }

    const category = Category.create({ name, parent })
    const createdCategory = await this.categoryRepository.create(category)

    return createdCategory
  }
}