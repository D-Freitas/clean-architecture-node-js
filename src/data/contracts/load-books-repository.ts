import { BookStock } from "@/domain/entities"

export interface LoadBooksRepository {
  loadBooks: () => LoadBooksRepository.output
}

export namespace LoadBooksRepository {
  export type output = Promise<BookStock[]>
}
