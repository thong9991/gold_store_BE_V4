"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductComposer = getProductComposer;
const GetAllProduct_1 = require("../../../../app/useCases/Product/implementations/GetAllProduct");
const GetProduct_1 = require("../../../../presentation/http/controllers/Product/implementations/GetProduct");
const Product_1 = require("../../../repositories/typeorm/Product");
function getProductComposer() {
    const repository = new Product_1.ProductRepository();
    const useCase = new GetAllProduct_1.GetAllProductUseCase(repository);
    const controller = new GetProduct_1.GetProductController(useCase);
    return controller;
}
//# sourceMappingURL=getProduct.js.map