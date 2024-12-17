"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllOrderUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/order/ErrorType");
class GetAllOrderUseCase {
    constructor(orderDetailsRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
    }
    async execute(page) {
        try {
            const orders = await this.orderDetailsRepository.findAll(page);
            if (orders.total == 0) {
                return {
                    data: { error: ErrorType_1.OrderErrorType.OrderNotFound },
                    success: false,
                };
            }
            return { data: orders, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllOrderUseCase = GetAllOrderUseCase;
//# sourceMappingURL=GetAllOrder.js.map