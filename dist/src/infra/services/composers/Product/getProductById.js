"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByIdComposer = getProductByIdComposer;
const GetProductById_1 = require("../../../../app/useCases/Product/implementations/GetProductById");
const GetProductById_2 = require("../../../../presentation/http/controllers/Product/implementations/GetProductById");
const OrderSale_1 = require("../../../repositories/typeorm/OrderSale");
const Product_1 = require("../../../repositories/typeorm/Product");
function getProductByIdComposer() {
    const productRepository = new Product_1.ProductRepository();
    const orderSaleRepository = new OrderSale_1.OrderSaleRepository();
    const useCase = new GetProductById_1.GetProductByIdUseCase(productRepository, orderSaleRepository);
    const controller = new GetProductById_2.GetProductByIdController(useCase);
    return controller;
}
//# sourceMappingURL=getProductById.js.map