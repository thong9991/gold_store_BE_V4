"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRoutes = void 0;
const express_1 = require("express");
const createNotification_1 = require("../../../infra/services/composers/Notification/createNotification");
const express_2 = require("../../adapters/express");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const notificationRoutes = (0, express_1.Router)();
exports.notificationRoutes = notificationRoutes;
notificationRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createNotification_1.createNotificationComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=notification.js.map