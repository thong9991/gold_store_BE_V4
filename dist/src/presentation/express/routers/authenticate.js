"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRoutes = void 0;
const express_1 = require("express");
const express_2 = require("../../adapters/express");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const authenticateUser_1 = require("../../../infra/services/composers/Authenticate/authenticateUser");
const recoverUserInformation_1 = require("../../../infra/services/composers/Authenticate/recoverUserInformation");
const refreshTokenUser_1 = require("../../../infra/services/composers/Authenticate/refreshTokenUser");
const refreshToken_1 = require("../../../infra/services/composers/Authenticate/refreshToken");
const authenticateRoutes = (0, express_1.Router)();
exports.authenticateRoutes = authenticateRoutes;
authenticateRoutes.post('/login', async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, authenticateUser_1.authenticateUserComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
authenticateRoutes.post('/refresh-token', async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, refreshTokenUser_1.refreshTokenUserComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
authenticateRoutes.get('/refresh-token/:user_id', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, refreshToken_1.refreshTokenComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
authenticateRoutes.post('/user/:user_id', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, recoverUserInformation_1.recoverUserInformationComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=authenticate.js.map