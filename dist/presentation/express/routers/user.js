"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const createUser_1 = require("../../../infra/services/composers/User/createUser");
const deleteUser_1 = require("../../../infra/services/composers/User/deleteUser");
const getUser_1 = require("../../../infra/services/composers/User/getUser");
const updateUser_1 = require("../../../infra/services/composers/User/updateUser");
const express_2 = require("../../adapters/express");
const ensureAdminAuthorized_1 = require("../middlewares/ensureAdminAuthorized");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post('/', async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createUser_1.createUserComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
userRoutes.get('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getUser_1.getUserComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
userRoutes.patch('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateUser_1.updateUserComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
userRoutes.delete('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteUser_1.deleteUserComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=user.js.map