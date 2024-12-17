"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssetComposer = getAssetComposer;
const GetAllAsset_1 = require("../../../../app/useCases/Asset/implementations/GetAllAsset");
const GetAsset_1 = require("../../../../presentation/http/controllers/Asset/implementations/GetAsset");
const Asset_1 = require("../../../repositories/typeorm/Asset");
function getAssetComposer() {
    const repository = new Asset_1.AssetRepository();
    const useCase = new GetAllAsset_1.GetAllAssetUseCase(repository);
    const controller = new GetAsset_1.GetAssetController(useCase);
    return controller;
}
//# sourceMappingURL=getAsset.js.map