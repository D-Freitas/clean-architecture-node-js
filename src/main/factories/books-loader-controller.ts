import { BooksLoaderController } from '@/presentation/controllers'
import { BooksLoaderService } from '@/data/services/books-loader'
import { BooksRepository } from '@/infra/repositories/books-repository'
import { Controller } from '@/presentation/contracts'

export const makeBooksLoaderController = (): Controller => {
  const repository = new BooksRepository()
  const loader = new BooksLoaderService(repository)
  return new BooksLoaderController(loader)
}
