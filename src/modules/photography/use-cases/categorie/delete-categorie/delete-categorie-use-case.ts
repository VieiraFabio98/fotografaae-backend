import { inject, injectable } from 'tsyringe'
import { Categorie } from '@modules/photography/infra/typeorm/entities/categorie'
import { ICategorieRepository } from '@modules/photography/repositories/i-categorie-repository'
import { HttpResponse } from '@shared/helpers'

@injectable()
class DeleteCategorieUseCase {
  constructor(@inject('CategorieRepository')
    private categorieRepository: ICategorieRepository
  ) {}

  async execute(id: string): Promise<HttpResponse> {
    const categorie = await this.categorieRepository.delete(id)

    return categorie
  }
}

export { DeleteCategorieUseCase }
