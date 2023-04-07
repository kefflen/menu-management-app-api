import { Router } from 'express'
import userRoutes from './userRoutes'
import categoryRoutes from './categoryRoutes'
import productRoutes from './productRoutes'

const routes = Router()
routes.use('/users', userRoutes)
routes.use('/categories', categoryRoutes)
routes.use('/products', productRoutes)
export {
  routes
}