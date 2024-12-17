"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderComposer = getOrderComposer;
const GetAllOrder_1 = require("../../../../app/useCases/Order/implementations/GetAllOrder");
const GetOrder_1 = require("../../../../presentation/http/controllers/Order/implementations/GetOrder");
const OrderDetails_1 = require("../../../repositories/typeorm/OrderDetails");
function getOrderComposer() {
    const repository = new OrderDetails_1.OrderDetailsRepository();
    const useCase = new GetAllOrder_1.GetAllOrderUseCase(repository);
    const controller = new GetOrder_1.GetOrderController(useCase);
    return controller;
}
//# sourceMappingURL=getOrder.js.map