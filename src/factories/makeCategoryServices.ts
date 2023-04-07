import {
  CreateCategoryService,
  GetCategoryByIdService,
  ListCategoriesService,
  UpdateCategoryService,
  DeleteCategoryService,
} from '../domain/services/category-services'
import { categoryServicesDepedencies } from '../domain/services/category-services/CategoryServices'
import MongoCategoryRepository from '../infra/mongo/repositories/MongoCategoryRepository'

export default function makeCategoryServices() {
  const depedencies: categoryServicesDepedencies = {
    categoryRepository: new MongoCategoryRepository(),
  }

  return {
    createCategoryService: new CreateCategoryService(depedencies),
    getCategoryByIdService: new GetCategoryByIdService(depedencies),
    listCategoriesService: new ListCategoriesService(depedencies),
    updateCategoryService: new UpdateCategoryService(depedencies),
    deleteCategoryService: new DeleteCategoryService(depedencies),
  }
}
