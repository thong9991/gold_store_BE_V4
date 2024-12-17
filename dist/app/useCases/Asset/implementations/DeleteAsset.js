"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAssetUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/asset/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/asset/SuccessType");
class DeleteAssetUseCase {
    constructor(assetRepository, cashFlowRepository) {
        this.assetRepository = assetRepository;
        this.cashFlowRepository = cashFlowRepository;
    }
    async execute(drawerId, assetType) {
        try {
            const cashFlowExist = await this.cashFlowRepository.findByAssetId(drawerId);
            if (cashFlowExist) {
                return {
                    data: { error: ErrorType_1.AssetErrorType.CashFlowConstraint },
                    success: false,
                };
            }
            const assetExist = (await this.assetRepository.findByDrawerIdAndAssetType(drawerId, assetType));
            if (!assetExist) {
                return {
                    data: { error: ErrorType_1.AssetErrorType.AssetNotExist },
                    success: false,
                };
            }
            await this.assetRepository.delete(drawerId, assetType);
            return { data: { msg: SuccessType_1.AssetSuccessType.AssetDeleted }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteAssetUseCase = DeleteAssetUseCase;
//# sourceMappingURL=DeleteAsset.js.map