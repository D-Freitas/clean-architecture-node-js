import { BookStock } from '@/domain/entities'

export interface BooksLoader {
  load: () => Promise<BookStock[]>
}
