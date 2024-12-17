"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCashFlowUseCase = void 0;
const CashFlow_1 = require("../../../../domain/entities/CashFlow");
class CreateCashFlowUseCase {
    constructor(cashFlowRepository) {
        this.cashFlowRepository = cashFlowRepository;
    }
    async execute({ asset, amount, }) {
        try {
            const cashFlowEntity = CashFlow_1.CashFlowEntity.create({
                asset,
                amount,
            });
            const cashFlow = await this.cashFlowRepository.create(cashFlowEntity);
            return { data: cashFlow, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateCashFlowUseCase = CreateCashFlowUseCase;
//# sourceMappingURL=CreateCashFlow.js.map