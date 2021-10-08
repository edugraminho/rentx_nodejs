import { Spec } from "../entities/Spec";

interface ICreateSpecDTO {
  name: string;
  description: string;
}

interface ISpecRepository {
  findByName(name: string): Spec;
  create({ name, description }: ICreateSpecDTO): void;
}

export { ISpecRepository, ICreateSpecDTO };

