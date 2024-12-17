"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorRoutes = void 0;
const express_1 = require("express");
const createVendor_1 = require("../../../infra/services/composers/Vendor/createVendor");
const deleteVendor_1 = require("../../../infra/services/composers/Vendor/deleteVendor");
const getVendor_1 = require("../../../infra/services/composers/Vendor/getVendor");
const updateVendor_1 = require("../../../infra/services/composers/Vendor/updateVendor");
const express_2 = require("../../adapters/express");
const ensureAdminAuthorized_1 = require("../middlewares/ensureAdminAuthorized");
const vendorRoutes = (0, express_1.Router)();
exports.vendorRoutes = vendorRoutes;
vendorRoutes.post('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createVendor_1.createVendorComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
vendorRoutes.get('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getVendor_1.getVendorComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
vendorRoutes.patch('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateVendor_1.updateVendorComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
vendorRoutes.delete('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteVendor_1.deleteVendorComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=vendor.js.map