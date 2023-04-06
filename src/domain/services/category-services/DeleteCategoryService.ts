import CategoryServices from './CategoryServices'

export default class DeleteCategoryService extends CategoryServices {
  async execute(categoryId: string): Promise<void> {
    await this.categoryRepository.delete(categoryId)
  }
}