"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderComposer = createOrderComposer;
const CreateOrder_1 = require("../../../../app/useCases/Order/implementations/CreateOrder");
const CreateOrder_2 = require("../../../../presentation/http/controllers/Order/implementations/CreateOrder");
const OrderDetails_1 = require("../../../repositories/typeorm/OrderDetails");
const Staff_1 = require("../../../repositories/typeorm/Staff");
function createOrderComposer() {
    const orderDetailsRepository = new OrderDetails_1.OrderDetailsRepository();
    const staffRepository = new Staff_1.StaffRepository();
    const useCase = new CreateOrder_1.CreateOrderUseCase(orderDetailsRepository, staffRepository);
    const controller = new CreateOrder_2.CreateOrderController(useCase);
    return controller;
}
//# sourceMappingURL=createOrder.js.map