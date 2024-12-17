"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRoutes = void 0;
const express_1 = require("express");
const changePassword_1 = require("../../../infra/services/composers/Profile/changePassword");
const deleteAccount_1 = require("../../../infra/services/composers/Profile/deleteAccount");
const getProfile_1 = require("../../../infra/services/composers/Profile/getProfile");
const updateAccount_1 = require("../../../infra/services/composers/Profile/updateAccount");
const updateProfile_1 = require("../../../infra/services/composers/Profile/updateProfile");
const bindToken_1 = require("../../../infra/services/composers/User/bindToken");
const express_2 = require("../../adapters/express");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const profileRoutes = (0, express_1.Router)();
exports.profileRoutes = profileRoutes;
profileRoutes.patch('/update_profile/:user_id', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateProfile_1.updateProfileComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
profileRoutes.patch('/change_password/:user_id', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, changePassword_1.changePasswordComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
profileRoutes.patch('/update_account/:user_id', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateAccount_1.updateAccountComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
profileRoutes.get('/:user_id', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getProfile_1.getProfileComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
profileRoutes.delete('/delete_account/:user_id', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteAccount_1.deleteAccountComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
profileRoutes.patch('/bind_token/:user_id', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, bindToken_1.bindTokenComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=profile.js.map