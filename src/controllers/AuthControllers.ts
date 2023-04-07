import { Request, Response } from 'express'
import makeAuthServices from '../factories/makeAuthServices'

const { loginService } = makeAuthServices()

export async function loginController(req: Request, res: Response) {
  const { email, password } = req.body
  const user = await loginService.execute({ email, password })

  return res.json(user)
}