import { NextFunction, Request, Response } from 'express'
import makeAuthServices from '../factories/makeAuthServices'
import AppError from '../domain/errors/AppError'

const { verifyAuthTokenService } = makeAuthServices()

export default async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const bearerToken = request.headers.authorization
  if (!bearerToken) throw AppError.unauthorized('Need to be authenticated')

  const userId = await verifyAuthTokenService.execute(bearerToken)

  request.userId = userId
  next()
}