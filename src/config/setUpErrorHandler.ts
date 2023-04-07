import { Express, Request, Response, NextFunction } from 'express'
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
      console.log(error)

      if (error instanceof AppError) {
        return response.status(error.code).json({
          message: error.message,
        })
      } else {
        return response.status(500).json({
          message: 'Internal Server Error',
        })
      }
    }
  )
}
