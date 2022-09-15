import { LoadBooksRepository } from '@/data/contracts'
import { BooksStockDTO } from '@/data/dtos'
import { books } from '@/infra/data-sources'

export class BooksRepository implements LoadBooksRepository {
  async loadBooks (): Promise<BooksStockDTO[]> {
    return books.map(book => ({
      book: book.bookInformation,
      supplier: book.bookSupplier,
      amount: book.quantityOfProducts
    }))
  }
}
