import { Router } from "express";
import { CreateSpecController } from "../modules/cars/useCases/createSpec/CreateSpecController";


const specRoutes = Router();

specRoutes.post("/", (request, response) => {
  return CreateSpecController.handle(request, response);
});

export { specRoutes };




// import { request, response, Router } from "express";
// import { SpecRepository } from "../modules/cars/repositories/implementations/SpecRepository";
// import { CreateSpecService } from "../modules/cars/services/CreateSpecService";

// const specRoutes = Router();
// const specsRepository = new SpecRepository();

// specRoutes.post("/", (request, response) => {
//   const { name, description } = request.body;

//   const createSpecService = new CreateSpecService(specsRepository);
//   createSpecService.execute({ name, description });

//   return response.status(201).send();
// });

// export { specRoutes };
