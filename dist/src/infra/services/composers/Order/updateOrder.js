"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderComposer = updateOrderComposer;
const UpdateOrder_1 = require("../../../../app/useCases/Order/implementations/UpdateOrder");
const UpdateOrder_2 = require("../../../../presentation/http/controllers/Order/implementations/UpdateOrder");
const OrderDetails_1 = require("../../../repositories/typeorm/OrderDetails");
function updateOrderComposer() {
    const repostory = new OrderDetails_1.OrderDetailsRepository();
    const useCase = new UpdateOrder_1.UpdateOrderUseCase(repostory);
    const controller = new UpdateOrder_2.UpdateOrderController(useCase);
    return controller;
}
//# sourceMappingURL=updateOrder.js.map