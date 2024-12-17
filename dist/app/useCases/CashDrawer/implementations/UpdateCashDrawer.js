"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCashDrawerUseCase = void 0;
const CashDrawer_1 = require("../../../../domain/entities/CashDrawer");
const ErrorType_1 = require("../../../../domain/enums/cashDrawer/ErrorType");
class UpdateCashDrawerUseCase {
    constructor(cashDrawerRepository) {
        this.cashDrawerRepository = cashDrawerRepository;
    }
    async execute(drawerId, { drawerName, drawerType }) {
        try {
            const cashDrawerExist = (await this.cashDrawerRepository.findById(drawerId));
            if (!cashDrawerExist) {
                return {
                    data: { error: ErrorType_1.CashDrawerErrorType.CashDrawerNotExist },
                    success: false,
                };
            }
            const cashDrawerEntity = CashDrawer_1.CashDrawerEntity.update({
                drawerName,
                drawerType,
            });
            const cashDrawer = await this.cashDrawerRepository.update(cashDrawerExist, cashDrawerEntity);
            return { data: cashDrawer, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.UpdateCashDrawerUseCase = UpdateCashDrawerUseCase;
//# sourceMappingURL=UpdateCashDrawer.js.map