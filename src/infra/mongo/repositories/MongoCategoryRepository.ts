import Category from '../../../domain/entities/Category'
import AppError from '../../../domain/errors/AppError'
import ICategoryRepository from '../../../domain/repositories/ICategoryRepository'
import CategoryModel from '../models/CategoryModel'

export default class MongoCategoryRepository implements ICategoryRepository {
  async create(category: Category): Promise<Category> {
    const categoryDTO = await (await CategoryModel.create(category)).populate('parent')
    return new Category(categoryDTO)
  }

  async list(): Promise<Category[]> {
    const categoriesDTO = await CategoryModel.find().populate('parent')
    return categoriesDTO.map((categoryDTO) => new Category(categoryDTO))
  }

  async getById(categoryId: string): Promise<Category | null> {
    const categoryDTO = await CategoryModel.findById(categoryId).populate(
      'parent'
    )
    if (!categoryDTO) return null
    return new Category(categoryDTO)
  }

  async update(category: Category): Promise<Category> {
    const { _id, ...otherProps } = category
    await CategoryModel.updateOne({ _id }, otherProps)
    const categoryDTO = await CategoryModel.findById(_id).populate(
      'parent'
    )

    if (!categoryDTO) throw AppError.notFound('Category not found')

    return new Category(categoryDTO)
  }

  async delete(categoryId: string): Promise<void> {
    await CategoryModel.deleteOne({ _id: categoryId })
  }
}
