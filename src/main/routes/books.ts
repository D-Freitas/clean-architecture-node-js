import { Router } from 'express'

import { makeBooksLoaderController } from '@/main/factories/books-loader-controller'
import { adaptRoute } from '@/main/adapters'

export default (router: Router): void => {
  router.get('/books', adaptRoute(makeBooksLoaderController()))
}
