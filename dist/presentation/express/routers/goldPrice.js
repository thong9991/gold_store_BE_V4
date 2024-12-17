"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goldPriceRoutes = void 0;
const express_1 = require("express");
const createGoldPrice_1 = require("../../../infra/services/composers/GoldPrice/createGoldPrice");
const deleteGoldPrice_1 = require("../../../infra/services/composers/GoldPrice/deleteGoldPrice");
const getGoldPrice_1 = require("../../../infra/services/composers/GoldPrice/getGoldPrice");
const updateAllGoldPrice_1 = require("../../../infra/services/composers/GoldPrice/updateAllGoldPrice");
const updateGoldPrice_1 = require("../../../infra/services/composers/GoldPrice/updateGoldPrice");
const express_2 = require("../../adapters/express");
const ensureAdminAuthorized_1 = require("../middlewares/ensureAdminAuthorized");
const ensureStaffAuthorized_1 = require("../middlewares/ensureStaffAuthorized");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const goldPriceRoutes = (0, express_1.Router)();
exports.goldPriceRoutes = goldPriceRoutes;
goldPriceRoutes.post('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createGoldPrice_1.createGoldPriceComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
goldPriceRoutes.get('/', ensureStaffAuthorized_1.ensureStaffAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getGoldPrice_1.getGoldPriceComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
goldPriceRoutes.patch('/', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateAllGoldPrice_1.updateAllGoldPriceComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
goldPriceRoutes.patch('/:goldType', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateGoldPrice_1.updateGoldPriceComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
goldPriceRoutes.delete('/:goldType', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteGoldPrice_1.deleteGoldPriceComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=goldPrice.js.map