"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relativeRoutes = void 0;
const express_1 = require("express");
const createRelative_1 = require("../../../infra/services/composers/Relative/createRelative");
const deleteRelative_1 = require("../../../infra/services/composers/Relative/deleteRelative");
const getRelative_1 = require("../../../infra/services/composers/Relative/getRelative");
const updateRelative_1 = require("../../../infra/services/composers/Relative/updateRelative");
const express_2 = require("../../adapters/express");
const ensureAdminAuthorized_1 = require("../middlewares/ensureAdminAuthorized");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const relativeRoutes = (0, express_1.Router)();
exports.relativeRoutes = relativeRoutes;
relativeRoutes.post('/:user_id', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createRelative_1.createRelativeComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
relativeRoutes.get('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getRelative_1.getRelativeComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
relativeRoutes.patch('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateRelative_1.updateRelativeComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
relativeRoutes.delete('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteRelative_1.deleteRelativeComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=relative.js.map