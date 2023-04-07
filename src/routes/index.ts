import { Router } from 'express'
import userRoutes from './userRoutes'
import categoryRoutes from './categoryRoutes'

const routes = Router()
routes.use('/users', userRoutes)
routes.use('/categories', categoryRoutes)

export {
  routes
}