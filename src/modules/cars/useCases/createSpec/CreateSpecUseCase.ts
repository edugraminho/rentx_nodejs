import {
  ICreateSpecDTO,
  ISpecRepository,
} from "../../repositories/ISpecRepository";

class CreateSpecUseCase {
  constructor(private specRepository: ISpecRepository) {}

  async execute({ name, description }: ICreateSpecDTO): Promise<void> {
    const findSpec = await this.specRepository.findByName(name);

    if (findSpec) {
      throw new Error("Spec already exists");
    }

    await this.specRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecUseCase };
