"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/order/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/order/SuccessType");
class DeleteOrderUseCase {
    constructor(orderDetailsRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
    }
    async execute(orderId) {
        try {
            const orderExist = (await this.orderDetailsRepository.findById(orderId));
            if (!orderExist) {
                return {
                    data: { error: ErrorType_1.OrderErrorType.OrderNotExist },
                    success: false,
                };
            }
            await this.orderDetailsRepository.delete(orderId);
            return {
                data: { msg: SuccessType_1.OrderSuccessType.OrderDeleted },
                success: true,
            };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteOrderUseCase = DeleteOrderUseCase;
//# sourceMappingURL=DeleteOrder.js.map