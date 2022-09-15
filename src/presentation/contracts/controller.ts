import { HttpResponse } from '@/presentation/contracts'
import { BookStockViewModel } from '@/presentation/view-models'

export interface Controller {
  handle: () => Promise<HttpResponse<BookStockViewModel[]>>
}
