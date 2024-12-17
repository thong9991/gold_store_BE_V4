"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCheckedOrdersComposer = deleteCheckedOrdersComposer;
const DeleteCheckedOrders_1 = require("../../../../app/useCases/Order/implementations/DeleteCheckedOrders");
const DeleteCheckedOrders_2 = require("../../../../presentation/http/controllers/Order/implementations/DeleteCheckedOrders");
const OrderDetails_1 = require("../../../repositories/typeorm/OrderDetails");
function deleteCheckedOrdersComposer() {
    const repository = new OrderDetails_1.OrderDetailsRepository();
    const useCase = new DeleteCheckedOrders_1.DeleteCheckedOrderUseCase(repository);
    const controller = new DeleteCheckedOrders_2.DeleteCheckedOrdersController(useCase);
    return controller;
}
//# sourceMappingURL=deleteCheckedOrders.js.map