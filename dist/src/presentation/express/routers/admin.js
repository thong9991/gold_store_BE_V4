"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminUserRoutes = void 0;
const express_1 = require("express");
const createAdmin_1 = require("../../../infra/services/composers/Admin/createAdmin");
const deleteAdmin_1 = require("../../../infra/services/composers/Admin/deleteAdmin");
const getAdmin_1 = require("../../../infra/services/composers/Admin/getAdmin");
const initAdmin_1 = require("../../../infra/services/composers/Admin/initAdmin");
const updateAdmin_1 = require("../../../infra/services/composers/Admin/updateAdmin");
const authenticateAdmin_1 = require("../../../infra/services/composers/Authenticate/authenticateAdmin");
const express_2 = require("../../adapters/express");
const ensureAdminAuthorized_1 = require("../middlewares/ensureAdminAuthorized");
const adminUserRoutes = (0, express_1.Router)();
exports.adminUserRoutes = adminUserRoutes;
adminUserRoutes.post('/init', async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, initAdmin_1.initAdminComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
adminUserRoutes.post('/login', async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, authenticateAdmin_1.authenticateAdminComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
adminUserRoutes.post('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createAdmin_1.createAdminComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
adminUserRoutes.get('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getAdmin_1.getAdminComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
adminUserRoutes.patch('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateAdmin_1.updateAdminComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
adminUserRoutes.delete('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteAdmin_1.deleteAdminComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=admin.js.map