import { Router } from 'express'
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  listUsersController,
  updateUserController,
} from '../controllers/UserControllers'

const userRoutes = Router()

userRoutes.post('/', createUserController)
userRoutes.get('/:userId', getUserByIdController)
userRoutes.get('/', listUsersController)
userRoutes.patch('/', updateUserController)
userRoutes.delete('/userId', deleteUserController)

export default userRoutes
