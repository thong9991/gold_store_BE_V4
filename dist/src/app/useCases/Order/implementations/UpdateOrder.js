"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderUseCase = void 0;
const OrderDetails_1 = require("../../../../domain/entities/OrderDetails");
const ErrorType_1 = require("../../../../domain/enums/order/ErrorType");
class UpdateOrderUseCase {
    constructor(orderDetailsRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
    }
    async execute(orderId, { total, goldToCash, discount, isChecked, description, }) {
        try {
            const orderExist = (await this.orderDetailsRepository.findById(orderId));
            if (!orderExist) {
                return {
                    data: { error: ErrorType_1.OrderErrorType.OrderNotExist },
                    success: false,
                };
            }
            const orderEntity = OrderDetails_1.OrderDetailsEntity.update({
                total,
                goldToCash,
                discount,
                isChecked,
                description,
            });
            const order = await this.orderDetailsRepository.update(orderExist, orderEntity);
            return { data: order, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.UpdateOrderUseCase = UpdateOrderUseCase;
//# sourceMappingURL=UpdateOrder.js.map