export type BookStock = {
  book: Book
  supplier: Supplier
  amount: number
}

type Book = {
  name: string
  subject: string
  description: string
  author: string
  price: number
}

type Supplier = {
  corporateName: string
  phoneNumber: number
  address: string
  cep: number
  cnpj: number
}
