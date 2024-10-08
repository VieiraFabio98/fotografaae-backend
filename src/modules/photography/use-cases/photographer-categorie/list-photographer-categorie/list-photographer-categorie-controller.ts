import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListPhotographerCategorieUseCase } from './list-photographer-categorie-use-case'

class ListPhotographerCategorieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { 
      search,
      page,
      pageSize,
      order,
      filter
    } = request.body

    const listPhotographerCategorieUseCase = container.resolve(ListPhotographerCategorieUseCase)

    const photographersCategories = await listPhotographerCategorieUseCase.execute({
      search: search as string,
      page: Number(page) as number,
      rowsPerPage: Number(pageSize) as number,
      order: order as string,
      filter: filter as string
    })

    return response.json(photographersCategories)
  }
}

export { ListPhotographerCategorieController }
