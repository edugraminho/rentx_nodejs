import { Spec } from "../../entities/Spec";
import { ICreateSpecDTO, ISpecRepository } from "../ISpecRepository";

class SpecRepository implements ISpecRepository {
  private specs: Spec[];

  constructor() {
    this.specs = [];
  }

  create({ name, description }: ICreateSpecDTO): void {
    const spec = new Spec();

    Object.assign(spec, {
      name,
      description,
      create_at: new Date(),
    });

    this.specs.push(spec);
  }

  findByName(name: string): Spec {
    const spec = this.specs.find((spec) => spec.name === name);

    return spec;
  }
}

export { SpecRepository };
