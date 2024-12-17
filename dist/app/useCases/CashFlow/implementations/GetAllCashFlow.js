"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCashFlowUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/cashFlow/ErrorType");
class GetAllCashFlowUseCase {
    constructor(cashFlowRepository) {
        this.cashFlowRepository = cashFlowRepository;
    }
    async execute(page) {
        try {
            const cashFlows = await this.cashFlowRepository.findAll(page);
            if (cashFlows.total == 0) {
                return {
                    data: { error: ErrorType_1.CashFlowErrorType.CashFlowNotFound },
                    success: false,
                };
            }
            return { data: cashFlows, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllCashFlowUseCase = GetAllCashFlowUseCase;
//# sourceMappingURL=GetAllCashFlow.js.map