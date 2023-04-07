import { Router } from 'express'
import {
  createCategoryController,
  deleteCategoryController,
  getCategoryByIdController,
  listCategoriesController,
  updateCategoryController,
} from '../controllers/CategoryController'

const categoryRoutes = Router()

categoryRoutes.post('/', createCategoryController)
categoryRoutes.get('/:categoryId', getCategoryByIdController)
categoryRoutes.get('/', listCategoriesController)
categoryRoutes.patch('/', updateCategoryController)
categoryRoutes.delete('/categoryId', deleteCategoryController)

export default categoryRoutes
