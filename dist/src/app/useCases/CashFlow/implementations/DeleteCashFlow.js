"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCashFlowUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/cashFlow/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/cashFlow/SuccessType");
class DeleteCashFlowUseCase {
    constructor(cashFlowRepository) {
        this.cashFlowRepository = cashFlowRepository;
    }
    async execute(cashFlowId) {
        try {
            const cashFlowExist = (await this.cashFlowRepository.findById(cashFlowId));
            if (!cashFlowExist) {
                return {
                    data: { error: ErrorType_1.CashFlowErrorType.CashFlowNotExist },
                    success: false,
                };
            }
            await this.cashFlowRepository.delete(cashFlowId);
            return {
                data: { msg: SuccessType_1.CashFlowSuccessType.CashFlowDeleted },
                success: true,
            };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteCashFlowUseCase = DeleteCashFlowUseCase;
//# sourceMappingURL=DeleteCashFlow.js.map