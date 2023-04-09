import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import { routes } from '../routes'
import setupSwaggerServer from './setupSwaggerServer'
import setupErrorHandler from './setupErrorHandler'

const server = express()
server.use(cors())
server.use(express.json())
server.use(routes)
setupErrorHandler(server)
setupSwaggerServer(server)

export default server