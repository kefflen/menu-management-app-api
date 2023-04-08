import { Request, Response } from 'express'
import makeAuthServices from '../factories/makeAuthServices'
import { userZodSchema } from '../ZodSchemas'

const { loginService } = makeAuthServices()

const loginBodySchema = userZodSchema.pick({ email: true, password: true })
export async function loginController(req: Request, res: Response) {
  const { email, password } = loginBodySchema.parse(req.body)
  const user = await loginService.execute({ email, password })

  return res.json(user)
}
