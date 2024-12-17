"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllGoldPriceUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/goldPrice/ErrorType");
class GetAllGoldPriceUseCase {
    constructor(goldPriceRepository) {
        this.goldPriceRepository = goldPriceRepository;
    }
    async execute(page) {
        try {
            if (page == -1) {
                const goldPrices = await this.goldPriceRepository.findAllDataNoPaging();
                return { data: goldPrices, success: true };
            }
            const goldPrices = await this.goldPriceRepository.findAll(page);
            if (goldPrices.total == 0) {
                return {
                    data: { error: ErrorType_1.GoldPriceErrorType.GoldPriceNotFound },
                    success: false,
                };
            }
            return { data: goldPrices, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllGoldPriceUseCase = GetAllGoldPriceUseCase;
//# sourceMappingURL=GetAllGoldPrice.js.map