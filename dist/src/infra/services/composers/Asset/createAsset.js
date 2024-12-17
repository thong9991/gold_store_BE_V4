"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssetComposer = createAssetComposer;
const CreateAsset_1 = require("../../../../app/useCases/Asset/implementations/CreateAsset");
const CreateAsset_2 = require("../../../../presentation/http/controllers/Asset/implementations/CreateAsset");
const Asset_1 = require("../../../repositories/typeorm/Asset");
function createAssetComposer() {
    const repostory = new Asset_1.AssetRepository();
    const useCase = new CreateAsset_1.CreateAssetUseCase(repostory);
    const controller = new CreateAsset_2.CreateAssetController(useCase);
    return controller;
}
//# sourceMappingURL=createAsset.js.map