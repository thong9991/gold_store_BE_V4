"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderComposer = deleteOrderComposer;
const DeleteOrder_1 = require("../../../../app/useCases/Order/implementations/DeleteOrder");
const DeleteOrder_2 = require("../../../../presentation/http/controllers/Order/implementations/DeleteOrder");
const OrderDetails_1 = require("../../../repositories/typeorm/OrderDetails");
function deleteOrderComposer() {
    const repostory = new OrderDetails_1.OrderDetailsRepository();
    const useCase = new DeleteOrder_1.DeleteOrderUseCase(repostory);
    const controller = new DeleteOrder_2.DeleteOrderController(useCase);
    return controller;
}
//# sourceMappingURL=deleteOrder.js.map