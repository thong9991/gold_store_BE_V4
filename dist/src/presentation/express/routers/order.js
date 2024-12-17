"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = require("express");
const createOrder_1 = require("../../../infra/services/composers/Order/createOrder");
const deleteCheckedOrders_1 = require("../../../infra/services/composers/Order/deleteCheckedOrders");
const deleteOrder_1 = require("../../../infra/services/composers/Order/deleteOrder");
const getOrder_1 = require("../../../infra/services/composers/Order/getOrder");
const updateOrder_1 = require("../../../infra/services/composers/Order/updateOrder");
const express_2 = require("../../adapters/express");
const ensureAdminAuthorized_1 = require("../middlewares/ensureAdminAuthorized");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const orderRoutes = (0, express_1.Router)();
exports.orderRoutes = orderRoutes;
orderRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createOrder_1.createOrderComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
orderRoutes.get('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getOrder_1.getOrderComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
orderRoutes.patch('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateOrder_1.updateOrderComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
orderRoutes.delete('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteCheckedOrders_1.deleteCheckedOrdersComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
orderRoutes.delete('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteOrder_1.deleteOrderComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=order.js.map