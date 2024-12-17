"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetRoutes = void 0;
const express_1 = require("express");
const createAsset_1 = require("../../../infra/services/composers/Asset/createAsset");
const deleteAsset_1 = require("../../../infra/services/composers/Asset/deleteAsset");
const getAsset_1 = require("../../../infra/services/composers/Asset/getAsset");
const express_2 = require("../../adapters/express");
const ensureAdminAuthorized_1 = require("../middlewares/ensureAdminAuthorized");
const assetRoutes = (0, express_1.Router)();
exports.assetRoutes = assetRoutes;
assetRoutes.post('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createAsset_1.createAssetComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
assetRoutes.get('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getAsset_1.getAssetComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
assetRoutes.delete('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteAsset_1.deleteAssetComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=asset.js.map