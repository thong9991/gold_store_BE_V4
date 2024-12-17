"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cashDrawerRoutes = void 0;
const express_1 = require("express");
const createCashDrawer_1 = require("../../../infra/services/composers/CashDrawer/createCashDrawer");
const deleteCashDrawer_1 = require("../../../infra/services/composers/CashDrawer/deleteCashDrawer");
const getCashDrawer_1 = require("../../../infra/services/composers/CashDrawer/getCashDrawer");
const updateCashDrawer_1 = require("../../../infra/services/composers/CashDrawer/updateCashDrawer");
const express_2 = require("../../adapters/express");
const ensureAdminAuthorized_1 = require("../middlewares/ensureAdminAuthorized");
const cashDrawerRoutes = (0, express_1.Router)();
exports.cashDrawerRoutes = cashDrawerRoutes;
cashDrawerRoutes.post('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createCashDrawer_1.createCashDrawerComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
cashDrawerRoutes.get('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getCashDrawer_1.getCashDrawerComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
cashDrawerRoutes.patch('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateCashDrawer_1.updateCashDrawerComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
cashDrawerRoutes.delete('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteCashDrawer_1.deleteCashDrawerComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=cashDrawer.js.map