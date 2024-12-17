"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderUseCase = void 0;
const OrderDetails_1 = require("../../../../domain/entities/OrderDetails");
const ErrorType_1 = require("../../../../domain/enums/order/ErrorType");
class CreateOrderUseCase {
    constructor(orderDetailsRepository, staffRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
        this.staffRepository = staffRepository;
    }
    async execute(userId, { orderExchanges, orderSales, total, goldToCash, discount, isChecked, description, }) {
        try {
            const staffExist = (await this.staffRepository.findByUserId(userId));
            if (!staffExist) {
                return {
                    data: { error: ErrorType_1.OrderErrorType.InvalidOrderDetails },
                    success: false,
                };
            }
            const orderDetailsEntity = OrderDetails_1.OrderDetailsEntity.create({
                staff: staffExist,
                orderExchanges,
                orderSales,
                total,
                goldToCash,
                discount,
                isChecked,
                description,
            });
            if (orderSales.length == 0 &&
                orderExchanges.length == 0 &&
                (!description || description == '')) {
                return {
                    data: { error: ErrorType_1.OrderErrorType.InvalidOrderDetails },
                    success: false,
                };
            }
            const savedOrder = (await this.orderDetailsRepository.create(orderDetailsEntity));
            return { data: savedOrder, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateOrderUseCase = CreateOrderUseCase;
//# sourceMappingURL=CreateOrder.js.map