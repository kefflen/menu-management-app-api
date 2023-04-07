import { Request, Response, request } from 'express'
import makeUserServices from '../factories/makeUserServices'

const {
  createUserService,
  getUserByIdService,
  listUsersService,
  updateUserService,
  deleteUserService
} = makeUserServices()

export async function createUserController(req: Request, res: Response) {
  const { name, password, email, isAdmin } = req.body
  const user = await createUserService.execute({ name, password, email, isAdmin })

  return res.status(201).json(user)
}

export async function getUserByIdController(req: Request, res: Response) {
  const id = req.params.id
  const user = await getUserByIdService.execute(id)

  return res.json(user)
}

export async function listUsersController(req: Request, res: Response) {
  const users = await listUsersService.execute()

  return res.json(users)
}

export async function updateUserController(req: Request, res: Response) {
  const { id, name } = req.body
  const user = await updateUserService.execute(id, { name })

  return res.json(user)
}

export async function deleteUserController(req: Request, res: Response) {
  const id = req.params.id
  await deleteUserService.execute(id)

  return res.sendStatus(200)
}