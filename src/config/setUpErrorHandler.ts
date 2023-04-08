import { Express, Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'
import AppError from '../domain/errors/AppError'

export default function setUpErrorHandler(express: Express) {
  express.use(
    (
      error: Error,
      request: Request,
      response: Response,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      nextFunction: NextFunction
    ) => {

      if (error instanceof AppError) {
        console.log(error)
        return response.status(error.code).json({
          error: error.message,
        })
      } else if (error instanceof ZodError) {
        console.log(error.errors)
        return response.status(400).json({
          errors: error.errors.map(error => error.message)
        })
      } else {
        console.log(error)
        return response.status(500).json({
          error: 'Internal Server Error',
        })
      }
    }
  )
}
