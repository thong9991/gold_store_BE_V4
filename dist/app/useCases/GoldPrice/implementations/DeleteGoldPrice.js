"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGoldPriceUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/goldPrice/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/goldPrice/SuccessType");
class DeleteGoldPriceUseCase {
    constructor(goldPriceRepository, productRepository, orderExchangeRepository) {
        this.goldPriceRepository = goldPriceRepository;
        this.productRepository = productRepository;
        this.orderExchangeRepository = orderExchangeRepository;
    }
    async execute(goldType) {
        try {
            const goldPriceExist = (await this.goldPriceRepository.findByGoldType(goldType));
            if (!goldPriceExist) {
                return {
                    data: { error: ErrorType_1.GoldPriceErrorType.GoldPriceNotExist },
                    success: false,
                };
            }
            const productExist = await this.productRepository.findByGoldType(goldType);
            if (productExist) {
                return {
                    data: { error: ErrorType_1.GoldPriceErrorType.ProductConstraint },
                    success: false,
                };
            }
            const orderExist = await this.orderExchangeRepository.findByGoldType(goldType);
            if (orderExist) {
                return {
                    data: { error: ErrorType_1.GoldPriceErrorType.OrderConstraint },
                    success: false,
                };
            }
            await this.goldPriceRepository.delete(goldType);
            return {
                data: { msg: SuccessType_1.GoldPriceSuccessType.GoldPriceDeleted },
                success: true,
            };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteGoldPriceUseCase = DeleteGoldPriceUseCase;
//# sourceMappingURL=DeleteGoldPrice.js.map