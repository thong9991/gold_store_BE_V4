"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductComposer = createProductComposer;
const CreateProduct_1 = require("../../../../app/useCases/Product/implementations/CreateProduct");
const CreateProduct_2 = require("../../../../presentation/http/controllers/Product/implementations/CreateProduct");
const Product_1 = require("../../../repositories/typeorm/Product");
function createProductComposer() {
    const repostory = new Product_1.ProductRepository();
    const useCase = new CreateProduct_1.CreateProductUseCase(repostory);
    const controller = new CreateProduct_2.CreateProductController(useCase);
    return controller;
}
//# sourceMappingURL=createProduct.js.map