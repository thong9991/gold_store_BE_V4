"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductComposer = updateProductComposer;
const UpdateProduct_1 = require("../../../../app/useCases/Product/implementations/UpdateProduct");
const UpdateProduct_2 = require("../../../../presentation/http/controllers/Product/implementations/UpdateProduct");
const Product_1 = require("../../../repositories/typeorm/Product");
function updateProductComposer() {
    const repostory = new Product_1.ProductRepository();
    const useCase = new UpdateProduct_1.UpdateProductUseCase(repostory);
    const controller = new UpdateProduct_2.UpdateProductController(useCase);
    return controller;
}
//# sourceMappingURL=updateProduct.js.map