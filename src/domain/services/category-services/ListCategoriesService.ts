import Category from '../../entities/Category'
import CategoryServices from './CategoryServices'

export default class ListCategoriesService extends CategoryServices {
  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list()

    return categories
  }
}