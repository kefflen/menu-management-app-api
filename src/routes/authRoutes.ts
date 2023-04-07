import { Router } from 'express'
import { loginController } from '../controllers/AuthControllers'

const authRoutes = Router()

authRoutes.post('/login', loginController)

export default authRoutes