import { Request, Response } from 'express'
import makeUserServices from '../factories/makeUserServices'
import { userZodSchema } from '../ZodSchemas'

const {
  createUserService,
  getUserByIdService,
  listUsersService,
  updateUserService,
  deleteUserService,
} = makeUserServices()

const createUserSchema = userZodSchema.omit({ id: true })
export async function createUserController(req: Request, res: Response) {
  const { name, password, email, isAdmin } = createUserSchema.parse(req.body)
  const user = await createUserService.execute({
    name,
    password,
    email,
    isAdmin,
  })

  return res.status(201).json(user)
}

export async function getUserByIdController(req: Request, res: Response) {
  const userId = req.params.userId
  const user = await getUserByIdService.execute(userId)

  return res.json(user)
}

export async function listUsersController(req: Request, res: Response) {
  const users = await listUsersService.execute()

  return res.json(users)
}

const updateUserSchema = userZodSchema
  .partial({ name: true })
  .omit({ email: true, isAdmin: true, password: true })
export async function updateUserController(req: Request, res: Response) {
  const { id, name } = updateUserSchema.parse(req.body)
  const user = await updateUserService.execute(id, { name })

  return res.json(user)
}

export async function deleteUserController(req: Request, res: Response) {
  const userId = req.params.userId
  await deleteUserService.execute(userId)

  return res.sendStatus(200)
}
