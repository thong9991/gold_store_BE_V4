"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoutes = void 0;
const express_1 = require("express");
const createContact_1 = require("../../../infra/services/composers/Contact/createContact");
const deleteContact_1 = require("../../../infra/services/composers/Contact/deleteContact");
const getContact_1 = require("../../../infra/services/composers/Contact/getContact");
const getContactByIds_1 = require("../../../infra/services/composers/Contact/getContactByIds");
const getSearchData_1 = require("../../../infra/services/composers/Contact/getSearchData");
const updateContact_1 = require("../../../infra/services/composers/Contact/updateContact");
const express_2 = require("../../adapters/express");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const ensureStaffAuthorized_1 = require("../middlewares/ensureStaffAuthorized");
const contactRoutes = (0, express_1.Router)();
exports.contactRoutes = contactRoutes;
contactRoutes.post('/', ensureStaffAuthorized_1.ensureStaffAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createContact_1.createContactComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
contactRoutes.get('/', ensureStaffAuthorized_1.ensureStaffAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getContact_1.getContactComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
contactRoutes.get('/search-data', ensureStaffAuthorized_1.ensureStaffAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getSearchData_1.getSearchDataComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
contactRoutes.get('/id-list', ensureStaffAuthorized_1.ensureStaffAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getContactByIds_1.getContactByIdsComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
contactRoutes.patch('/:id', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateContact_1.updateContactComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
contactRoutes.delete('/:id', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteContact_1.deleteContactComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=contact.js.map