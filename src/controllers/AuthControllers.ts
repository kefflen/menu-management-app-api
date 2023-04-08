import { Request, Response } from 'express'
import makeAuthServices from '../factories/makeAuthServices'
import { z } from 'zod'

const { loginService } = makeAuthServices()

const loginBodySchema = z.object({
  email: z.string().email('Need to pass a valid email address'),
  password: z.string().min(5, 'Password must be at least 5 characters'),
})

export async function loginController(req: Request, res: Response) {
  const { email, password } = loginBodySchema.parse(req.body)
  const user = await loginService.execute({ email, password })

  return res.json(user)
}
