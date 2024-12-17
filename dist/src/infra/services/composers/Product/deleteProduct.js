"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductComposer = deleteProductComposer;
const DeleteProduct_1 = require("../../../../app/useCases/Product/implementations/DeleteProduct");
const DeleteProduct_2 = require("../../../../presentation/http/controllers/Product/implementations/DeleteProduct");
const OrderSale_1 = require("../../../repositories/typeorm/OrderSale");
const Product_1 = require("../../../repositories/typeorm/Product");
function deleteProductComposer() {
    const productRepostory = new Product_1.ProductRepository();
    const orderSaleRepository = new OrderSale_1.OrderSaleRepository();
    const useCase = new DeleteProduct_1.DeleteProductUseCase(productRepostory, orderSaleRepository);
    const controller = new DeleteProduct_2.DeleteProductController(useCase);
    return controller;
}
//# sourceMappingURL=deleteProduct.js.map