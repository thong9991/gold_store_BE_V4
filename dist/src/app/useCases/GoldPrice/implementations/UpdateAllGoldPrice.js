"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAllGoldPriceUseCase = void 0;
const GoldPrice_1 = require("../../../../domain/entities/GoldPrice");
const ErrorType_1 = require("../../../../domain/enums/Authenticate/AuthenticateUser/ErrorType");
const ErrorType_2 = require("../../../../domain/enums/user/ErrorType");
class UpdateAllGoldPriceUseCase {
    constructor(goldPriceRepository, userRepository) {
        this.goldPriceRepository = goldPriceRepository;
        this.userRepository = userRepository;
    }
    async execute(userId, requestData) {
        try {
            var updateData = [];
            var goldPriceExists = [];
            const user = (await this.userRepository.findById(userId));
            if (!user) {
                return { data: { error: ErrorType_2.UserErrorType.UserNotExist }, success: false };
            }
            if (user.role != 'manager') {
                return {
                    data: { error: ErrorType_1.AuthenticateUserErrorType.AccessDenied },
                    success: false,
                };
            }
            for (const goldPrice of requestData) {
                if (goldPrice.goldType && goldPrice.goldType.trim().length != 0) {
                    const goldPriceExist = (await this.goldPriceRepository.findByGoldType(goldPrice.goldType));
                    if (goldPriceExist) {
                        const goldPriceEntity = GoldPrice_1.GoldPriceEntity.update({
                            goldType: goldPrice.goldType,
                            askPrice: goldPrice.askPrice,
                            bidPrice: goldPrice.bidPrice,
                        });
                        goldPriceExists.push(goldPriceExist);
                        updateData.push(goldPriceEntity);
                    }
                }
            }
            var updatedGoldPrices = [];
            for (var i = 0; i < updateData.length; i++) {
                const goldPrice = await this.goldPriceRepository.update(goldPriceExists[i], updateData[i]);
                updatedGoldPrices.push(goldPrice);
            }
            return { data: updatedGoldPrices, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.UpdateAllGoldPriceUseCase = UpdateAllGoldPriceUseCase;
//# sourceMappingURL=UpdateAllGoldPrice.js.map