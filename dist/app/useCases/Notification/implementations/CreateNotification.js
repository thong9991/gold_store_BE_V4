"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationUseCase = void 0;
const messaging_1 = require("firebase-admin/messaging");
const Notification_1 = require("../../../../domain/entities/Notification");
const ErrorType_1 = require("../../../../domain/enums/Authenticate/AuthenticateUser/ErrorType");
const ErrorType_2 = require("../../../../domain/enums/user/ErrorType");
class CreateNotificationUseCase {
    constructor(notificationRepository, userRepository) {
        this.notificationRepository = notificationRepository;
        this.userRepository = userRepository;
    }
    async execute(userId, { title, body, data }) {
        try {
            const user = (await this.userRepository.findById(userId));
            if (!user) {
                return { data: { error: ErrorType_2.UserErrorType.UserNotExist }, success: false };
            }
            if (user.role != 'manager') {
                return {
                    data: { error: ErrorType_1.AuthenticateUserErrorType.AccessDenied },
                    success: false,
                };
            }
            console.log(JSON.stringify(data));
            const message = {
                topic: 'goldPrice',
                notification: {
                    title: title,
                    body: body,
                },
                data,
            };
            (0, messaging_1.getMessaging)()
                .send(message)
                .then((response) => {
                console.log('Successfully sent message:', response);
            })
                .catch((error) => {
                console.log('Error sending message:', error);
            });
            const notificationEntity = Notification_1.NotificationEntity.create({
                title,
                body,
                data,
                user,
            });
            const notification = await this.notificationRepository.create(notificationEntity);
            return { data: { notification }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateNotificationUseCase = CreateNotificationUseCase;
//# sourceMappingURL=CreateNotification.js.map