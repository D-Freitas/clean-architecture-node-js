import { Controller } from '@/presentation/contracts'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpResponse = await controller.handle()
    response.status(httpResponse.statusCode).json(httpResponse.data)
  }
}
