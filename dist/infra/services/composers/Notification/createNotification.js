"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotificationComposer = createNotificationComposer;
const CreateNotification_1 = require("../../../../app/useCases/Notification/implementations/CreateNotification");
const CreateNotification_2 = require("../../../../presentation/http/controllers/Notification/implementations/CreateNotification");
const Notification_1 = require("../../../repositories/typeorm/Notification");
const User_1 = require("../../../repositories/typeorm/User");
function createNotificationComposer() {
    const notificationRepostory = new Notification_1.NotificationRepository();
    const userRepostory = new User_1.UserRepository();
    const useCase = new CreateNotification_1.CreateNotificationUseCase(notificationRepostory, userRepostory);
    const controller = new CreateNotification_2.CreateNotificationController(useCase);
    return controller;
}
//# sourceMappingURL=createNotification.js.map