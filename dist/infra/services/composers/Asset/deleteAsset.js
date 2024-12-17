"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAssetComposer = deleteAssetComposer;
const DeleteAsset_1 = require("../../../../app/useCases/Asset/implementations/DeleteAsset");
const DeleteAsset_2 = require("../../../../presentation/http/controllers/Asset/implementations/DeleteAsset");
const Asset_1 = require("../../../repositories/typeorm/Asset");
const CashFlow_1 = require("../../../repositories/typeorm/CashFlow");
function deleteAssetComposer() {
    const assetRepostory = new Asset_1.AssetRepository();
    const cashFlowRepository = new CashFlow_1.CashFlowRepository();
    const useCase = new DeleteAsset_1.DeleteAssetUseCase(assetRepostory, cashFlowRepository);
    const controller = new DeleteAsset_2.DeleteAssetController(useCase);
    return controller;
}
//# sourceMappingURL=deleteAsset.js.map