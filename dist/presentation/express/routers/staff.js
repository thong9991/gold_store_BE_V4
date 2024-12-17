"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffRoutes = void 0;
const express_1 = require("express");
const createStaff_1 = require("../../../infra/services/composers/Staff/createStaff");
const deleteStaff_1 = require("../../../infra/services/composers/Staff/deleteStaff");
const getStaff_1 = require("../../../infra/services/composers/Staff/getStaff");
const updateStaff_1 = require("../../../infra/services/composers/Staff/updateStaff");
const express_2 = require("../../adapters/express");
const ensureAdminAuthorized_1 = require("../middlewares/ensureAdminAuthorized");
const staffRoutes = (0, express_1.Router)();
exports.staffRoutes = staffRoutes;
staffRoutes.post('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createStaff_1.createStaffComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
staffRoutes.get('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getStaff_1.getStaffComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
staffRoutes.patch('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateStaff_1.updateStaffComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
staffRoutes.delete('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteStaff_1.deleteStaffComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=staff.js.map