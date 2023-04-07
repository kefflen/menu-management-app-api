import CategoryServices from './CategoryServices'

export class DeleteCategoryService extends CategoryServices {
  async execute(categoryId: string): Promise<void> {
    await this.categoryRepository.delete(categoryId)
  }
}