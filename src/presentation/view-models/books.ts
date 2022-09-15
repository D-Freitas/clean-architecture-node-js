import { BookStock } from '@/domain/entities'

export class BookStockViewModel {
  book: Book
  supplier: Supplier
  amount: number

  static map (entity: BookStock): BookStockViewModel {
    return {
      ...entity,
      book: {
        ...entity.book,
        price: String(entity.book.price)
      }
    }
  }

  static mapCollection (entities: BookStock[]): BookStockViewModel[] {
    return entities.map(BookStockViewModel.map)
  }
}

type Book = {
  name: string
  subject: string
  description: string
  author: string
  price: string
}

type Supplier = {
  corporateName: string
  phoneNumber: number
  address: string
  cep: number
  cnpj: number
}
