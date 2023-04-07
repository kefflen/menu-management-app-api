import { Router } from 'express'
import userRoutes from './userRoutes'
import categoryRoutes from './categoryRoutes'
import productRoutes from './productRoutes'
import authRoutes from './authRoutes'

const routes = Router()
routes.use('/users', userRoutes)
routes.use('/categories', categoryRoutes)
routes.use('/products', productRoutes)
routes.use('/auth', authRoutes)

export {
  routes
}