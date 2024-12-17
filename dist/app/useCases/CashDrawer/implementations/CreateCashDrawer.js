"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCashDrawerUseCase = void 0;
const CashDrawer_1 = require("../../../../domain/entities/CashDrawer");
class CreateCashDrawerUseCase {
    constructor(cashDrawerRepository) {
        this.cashDrawerRepository = cashDrawerRepository;
    }
    async execute({ drawerName, drawerType, }) {
        try {
            const cashDrawerEntity = CashDrawer_1.CashDrawerEntity.create({
                drawerName,
                drawerType,
            });
            const cashDrawer = await this.cashDrawerRepository.create(cashDrawerEntity);
            return { data: cashDrawer, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateCashDrawerUseCase = CreateCashDrawerUseCase;
//# sourceMappingURL=CreateCashDrawer.js.map