"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cashFlowRoutes = void 0;
const express_1 = require("express");
const createCashFlow_1 = require("../../../infra/services/composers/CashFlow/createCashFlow");
const deleteCashFlow_1 = require("../../../infra/services/composers/CashFlow/deleteCashFlow");
const getCashFlow_1 = require("../../../infra/services/composers/CashFlow/getCashFlow");
const express_2 = require("../../adapters/express");
const ensureAdminAuthorized_1 = require("../middlewares/ensureAdminAuthorized");
const cashFlowRoutes = (0, express_1.Router)();
exports.cashFlowRoutes = cashFlowRoutes;
cashFlowRoutes.post('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createCashFlow_1.createCashFlowComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
cashFlowRoutes.get('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getCashFlow_1.getCashFlowComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
cashFlowRoutes.delete('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteCashFlow_1.deleteCashFlowComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=cashFlow.js.map