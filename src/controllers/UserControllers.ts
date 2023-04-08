import { Request, Response } from 'express'
import { z } from 'zod'
import makeUserServices from '../factories/makeUserServices'

const {
  createUserService,
  getUserByIdService,
  listUsersService,
  updateUserService,
  deleteUserService,
} = makeUserServices()

const userZodSchema = z.object({
  id: z.string().uuid('Should pass a valid user id'),
  name: z.string().min(1, 'Shoud pass a valid user name'),
  password: z.string().min(5, 'Shoud pass a valid password'),
  email: z.string().email('Shoud pass a valid email'),
  isAdmin: z.boolean().describe('Shoud pass a valid valud to isAdmin'),
})

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
