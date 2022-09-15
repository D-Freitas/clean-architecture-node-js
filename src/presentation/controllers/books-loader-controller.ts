import { Controller, HttpResponse, ok, serverError } from '@/presentation/contracts'
import { BookStockViewModel } from '@/presentation/view-models'
import { BooksLoader } from '@/domain/use-cases'

export class BooksLoaderController implements Controller {
  constructor (private readonly booksLoader: BooksLoader) {}

  async handle (): Promise<HttpResponse<BookStockViewModel[]>> {
    try {
      const books = await this.booksLoader.load()
      return ok(BookStockViewModel.mapCollection(books))
    } catch (error) {
      return serverError(error.stack)
    }
  }
}
