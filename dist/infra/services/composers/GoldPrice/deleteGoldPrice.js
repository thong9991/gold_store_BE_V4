"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGoldPriceComposer = deleteGoldPriceComposer;
const DeleteGoldPrice_1 = require("../../../../app/useCases/GoldPrice/implementations/DeleteGoldPrice");
const DeleteGoldPrice_2 = require("../../../../presentation/http/controllers/GoldPrice/implementations/DeleteGoldPrice");
const GoldPrice_1 = require("../../../repositories/typeorm/GoldPrice");
const OrderExchange_1 = require("../../../repositories/typeorm/OrderExchange");
const Product_1 = require("../../../repositories/typeorm/Product");
function deleteGoldPriceComposer() {
    const goldPriceRepository = new GoldPrice_1.GoldPriceRepository();
    const productRepository = new Product_1.ProductRepository();
    const orderExchangeRepository = new OrderExchange_1.OrderExchangeRepository();
    const useCase = new DeleteGoldPrice_1.DeleteGoldPriceUseCase(goldPriceRepository, productRepository, orderExchangeRepository);
    const controller = new DeleteGoldPrice_2.DeleteGoldPriceController(useCase);
    return controller;
}
//# sourceMappingURL=deleteGoldPrice.js.map