import express from 'express'
import { setupRoutes } from '@/main/config/routes'

const app = express()
app.set('json spaces', 2)
setupRoutes(app)
export { app }
