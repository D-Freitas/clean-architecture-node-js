import { BooksStockDTO } from '@/data/dtos'

export interface LoadBooksRepository {
  loadBooks: () => Promise<BooksStockDTO[]>
}
