import ICategoryRepository from '../../repositories/ICategoryRepository'

export type categoryServicesDepedencies = {
  categoryRepository: ICategoryRepository
}

export default abstract class CategoryServices {
  protected categoryRepository: ICategoryRepository
  constructor({
    categoryRepository
  }: categoryServicesDepedencies) {
    this.categoryRepository = categoryRepository
  }

  abstract execute(...args: unknown[]): Promise<unknown>
}