"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCashDrawerUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/cashDrawer/ErrorType");
class GetAllCashDrawerUseCase {
    constructor(cashDrawerRepository) {
        this.cashDrawerRepository = cashDrawerRepository;
    }
    async execute(page) {
        try {
            if (page == -1) {
                const cashDrawers = await this.cashDrawerRepository.findAllDataNoPaging();
                return { data: cashDrawers, success: true };
            }
            const cashDrawers = await this.cashDrawerRepository.findAll(page);
            if (cashDrawers.total == 0) {
                return {
                    data: { error: ErrorType_1.CashDrawerErrorType.CashDrawerNotFound },
                    success: false,
                };
            }
            return { data: cashDrawers, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllCashDrawerUseCase = GetAllCashDrawerUseCase;
//# sourceMappingURL=GetAllCashDrawer.js.map