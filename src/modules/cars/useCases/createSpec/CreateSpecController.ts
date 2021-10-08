import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecUseCase } from "./CreateSpecUseCase";

class CreateSpecController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createSpecUseCase = container.resolve(CreateSpecUseCase);
    await createSpecUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecController };
