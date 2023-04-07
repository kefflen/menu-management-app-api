import { Router } from 'express'
import userRoutes from './userRoutes'
import categoryRoutes from './categoryRoutes'
import productRoutes from './productRoutes'
import authRoutes from './authRoutes'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const routes = Router()
routes.use('/user', userRoutes)
routes.use('/category', ensureAuthenticated, categoryRoutes)
routes.use('/product', ensureAuthenticated, productRoutes)
routes.use('/auth', authRoutes)

export {
  routes
}