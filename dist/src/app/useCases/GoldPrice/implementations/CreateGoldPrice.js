"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGoldPriceUseCase = void 0;
const GoldPrice_1 = require("../../../../domain/entities/GoldPrice");
const ErrorType_1 = require("../../../../domain/enums/goldPrice/ErrorType");
class CreateGoldPriceUseCase {
    constructor(goldPriceRepository) {
        this.goldPriceRepository = goldPriceRepository;
    }
    async execute({ goldType, askPrice, bidPrice, }) {
        try {
            const goldPriceEntity = GoldPrice_1.GoldPriceEntity.create({
                goldType,
                askPrice,
                bidPrice,
            });
            const goldPriceExist = await this.goldPriceRepository.findByGoldType(goldType);
            if (goldPriceExist) {
                return {
                    data: { error: ErrorType_1.GoldPriceErrorType.GoldPriceAlreadyExists },
                    success: false,
                };
            }
            const goldPrice = await this.goldPriceRepository.create(goldPriceEntity);
            return { data: goldPrice, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateGoldPriceUseCase = CreateGoldPriceUseCase;
//# sourceMappingURL=CreateGoldPrice.js.map