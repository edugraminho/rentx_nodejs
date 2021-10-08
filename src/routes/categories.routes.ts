import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return CreateCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return ListCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return ImportCategoryController.handle(request, response);
});

export { categoriesRoutes };




// import { request, response, Router } from "express";
// import multer from "multer";

// import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
// import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";
// import { ImportCategoryService } from "../modules/cars/services/ImportCategoryService";

// const categoriesRoutes = Router();
// const upload = multer({
//   dest: "./tmp",
// });

// const categoriesRepository = new CategoriesRepository();

// categoriesRoutes.post("/", (request, response) => {
//   const { name, description } = request.body;

//   const createCategoryService = new CreateCategoryService(categoriesRepository);
//   createCategoryService.execute({ name, description });

//   return response.status(201).send();
// });

// categoriesRoutes.get("/", (request, response) => {
//   const all = categoriesRepository.list();
//   return response.json(all);
// });

// // no insomnia em vez de JSON, coloca multipart name= file e value= procura o doc
// categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
//   const { file } = request;
//   const importCat = new ImportCategoryService()

//   importCat.execute({ file });

//   return response.send();
// });

// export { categoriesRoutes };
