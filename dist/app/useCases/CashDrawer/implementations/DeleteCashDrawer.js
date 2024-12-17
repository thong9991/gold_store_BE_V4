"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCashDrawerUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/cashDrawer/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/cashDrawer/SuccessType");
class DeleteCashDrawerUseCase {
    constructor(cashDrawerRepository, assetRepository) {
        this.cashDrawerRepository = cashDrawerRepository;
        this.assetRepository = assetRepository;
    }
    async execute(drawerId) {
        try {
            const cashDrawerExist = (await this.cashDrawerRepository.findById(drawerId));
            if (!cashDrawerExist) {
                return {
                    data: { error: ErrorType_1.CashDrawerErrorType.CashDrawerNotExist },
                    success: false,
                };
            }
            const assetExist = await this.assetRepository.findByCashDrawerId(drawerId);
            if (assetExist) {
                return {
                    data: { error: ErrorType_1.CashDrawerErrorType.AssetConstraint },
                    success: false,
                };
            }
            await this.cashDrawerRepository.delete(drawerId);
            return {
                data: { msg: SuccessType_1.CashDrawerSuccessType.CashDrawerDeleted },
                success: true,
            };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteCashDrawerUseCase = DeleteCashDrawerUseCase;
//# sourceMappingURL=DeleteCashDrawer.js.map