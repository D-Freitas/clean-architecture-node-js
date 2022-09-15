import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  const filepath = join(__dirname, '/../routes')
  readdirSync(filepath).map(async filename => {
    (await import(`../routes/${filename}`)).default(router)
  })
}
