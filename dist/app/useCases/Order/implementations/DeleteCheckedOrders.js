"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCheckedOrderUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/order/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/order/SuccessType");
class DeleteCheckedOrderUseCase {
    constructor(orderDetailsRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
    }
    async execute() {
        try {
            const paginatedList = await this.orderDetailsRepository.findCheckedOrders(-1);
            const ordersExist = paginatedList.body;
            if (!ordersExist || ordersExist.length < 0) {
                return {
                    data: { error: ErrorType_1.OrderErrorType.OrderNotFound },
                    success: false,
                };
            }
            for (var orderDetails of ordersExist) {
                await this.orderDetailsRepository.delete(orderDetails.id);
            }
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
exports.DeleteCheckedOrderUseCase = DeleteCheckedOrderUseCase;
//# sourceMappingURL=DeleteCheckedOrders.js.map