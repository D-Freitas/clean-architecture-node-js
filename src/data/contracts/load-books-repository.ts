import { BookStock } from "@/domain/entities";

export interface LoadBooksRepository {
  loadBooks: () => LoadBooksRepository.outPut;
}

export namespace LoadBooksRepository {
  export type outPut = Promise<BookStock[]>;
}
