import { Router } from 'express'
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  listProductsController,
  updateProductController,
} from '../controllers/ProductControllers'

const productRoutes = Router()

productRoutes.post('/', createProductController)
productRoutes.get('/:productId', getProductByIdController)
productRoutes.get('/', listProductsController)
productRoutes.patch('/', updateProductController)
productRoutes.delete('/productId', deleteProductController)

export default productRoutes
