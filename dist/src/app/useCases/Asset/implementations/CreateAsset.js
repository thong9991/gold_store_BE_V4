"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssetUseCase = void 0;
const Asset_1 = require("../../../../domain/entities/Asset");
class CreateAssetUseCase {
    constructor(assetRepository) {
        this.assetRepository = assetRepository;
    }
    async execute({ cashDrawer, assetType, amount, }) {
        try {
            const assetEntity = Asset_1.AssetEntity.create({
                cashDrawer,
                assetType,
                amount,
            });
            const asset = await this.assetRepository.create(assetEntity);
            return { data: asset, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateAssetUseCase = CreateAssetUseCase;
//# sourceMappingURL=CreateAsset.js.map