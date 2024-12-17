"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BindTokenUseCase = void 0;
const messaging_1 = require("firebase-admin/messaging");
const User_1 = require("../../../../domain/entities/User");
const ErrorType_1 = require("../../../../domain/enums/user/ErrorType");
class BindTokenUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userId, fcmToken) {
        try {
            const userExist = (await this.userRepository.findById(userId));
            if (!userExist) {
                return {
                    data: { error: ErrorType_1.UserErrorType.UserNotExist },
                    success: false,
                };
            }
            if (userExist.fcmToken == fcmToken) {
                return { data: { fcmToken }, success: true };
            }
            if (userExist.fcmToken) {
                await (0, messaging_1.getMessaging)()
                    .unsubscribeFromTopic(userExist.fcmToken, 'goldPrice')
                    .then((response) => {
                    console.log('Successfully removed token from topic:', response);
                })
                    .catch((error) => {
                    console.log('Error removed token from topic:', error);
                });
            }
            const userEntity = User_1.UserEntity.update({
                fcmToken,
            });
            await this.userRepository.update(userExist, userEntity);
            (0, messaging_1.getMessaging)()
                .subscribeToTopic(fcmToken, 'goldPrice')
                .then((response) => {
                console.log('Successfully subscribed to topic:', response);
            })
                .catch((error) => {
                console.log('Error subscribing to topic:', error);
            });
            return { data: { fcmToken }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.BindTokenUseCase = BindTokenUseCase;
//# sourceMappingURL=BindToken.js.map