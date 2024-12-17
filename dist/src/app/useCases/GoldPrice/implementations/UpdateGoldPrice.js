"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGoldPriceUseCase = void 0;
const GoldPrice_1 = require("../../../../domain/entities/GoldPrice");
const ErrorType_1 = require("../../../../domain/enums/goldPrice/ErrorType");
class UpdateGoldPriceUseCase {
    constructor(goldPriceRepository) {
        this.goldPriceRepository = goldPriceRepository;
    }
    async execute(goldType, { askPrice, bidPrice }) {
        try {
            const goldPriceExist = (await this.goldPriceRepository.findByGoldType(goldType));
            if (!goldPriceExist) {
                return {
                    data: { error: ErrorType_1.GoldPriceErrorType.GoldPriceNotExist },
                    success: false,
                };
            }
            const goldPriceEntity = GoldPrice_1.GoldPriceEntity.update({
                goldType,
                askPrice,
                bidPrice,
            });
            const goldPrice = await this.goldPriceRepository.update(goldPriceExist, goldPriceEntity);
            return { data: goldPrice, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.UpdateGoldPriceUseCase = UpdateGoldPriceUseCase;
//# sourceMappingURL=UpdateGoldPrice.js.map