"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllAssetUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/asset/ErrorType");
class GetAllAssetUseCase {
    constructor(assetRepository) {
        this.assetRepository = assetRepository;
    }
    async execute(drawerId) {
        try {
            const assets = await this.assetRepository.findAll(drawerId);
            if (assets.total == 0) {
                return {
                    data: { error: ErrorType_1.AssetErrorType.AssetNotFound },
                    success: false,
                };
            }
            return { data: assets, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllAssetUseCase = GetAllAssetUseCase;
//# sourceMappingURL=GetAllAsset.js.map