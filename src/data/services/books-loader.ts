import { BooksLoader } from '@/domain/use-cases'
import { BookStock } from '@/domain/entities'
import { LoadBooksRepository } from '@/data/contracts/load-books-repository'

export class BooksLoaderService implements BooksLoader {
  constructor (private readonly loadBooksRepository: LoadBooksRepository) {}

  async load (): Promise<BookStock[]> {
    return this.loadBooksRepository.loadBooks()
  }
}
