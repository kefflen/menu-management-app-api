import { Router } from 'express'
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  listUsersController,
  updateUserController,
} from '../controllers/UserControllers'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const userRoutes = Router()

userRoutes.post('/', createUserController)
userRoutes.get('/:userId', ensureAuthenticated, getUserByIdController)
userRoutes.get('/', ensureAuthenticated, listUsersController)
userRoutes.patch('/', ensureAuthenticated, updateUserController)
userRoutes.delete('/userId', ensureAuthenticated, deleteUserController)

export default userRoutes
