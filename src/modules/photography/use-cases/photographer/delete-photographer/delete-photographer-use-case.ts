import { inject, injectable } from 'tsyringe'
import { Photographer } from '@modules/photography/infra/typeorm/entities/photographer'
import { IPhotographerRepository } from '@modules/photography/repositories/i-photographer-repository'
import { HttpResponse } from '@shared/helpers'

@injectable()
class DeletePhotographerUseCase {
  constructor(@inject('PhotographerRepository')
    private photographerRepository: IPhotographerRepository
  ) {}

  async execute(id: string): Promise<HttpResponse> {
    const photographer = await this.photographerRepository.delete(id)

    return photographer
  }
}

export { DeletePhotographerUseCase }
