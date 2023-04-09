import { Express } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../swagger.json'

export default function setupSwaggerServer(express: Express) {
  express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}