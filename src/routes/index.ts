import { Router } from 'express'
import userRoutes from './userRoutes'
import categoryRoutes from './categoryRoutes'
import productRoutes from './productRoutes'
import authRoutes from './authRoutes'

const routes = Router()
routes.use('/user', userRoutes)
routes.use('/category', categoryRoutes)
routes.use('/product', productRoutes)
routes.use('/auth', authRoutes)

export {
  routes
}