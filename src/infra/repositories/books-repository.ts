import { LoadBooksRepository } from "@/data/contracts";
import { books } from "@/infra/data-sources";

export class BooksRepository implements LoadBooksRepository {
  async loadBooks(): LoadBooksRepository.output {
    return books.map((book) => ({
      book: book.bookInformation,
      supplier: book.bookSupplier,
      amount: book.quantityOfProducts,
    }));
  }
}
