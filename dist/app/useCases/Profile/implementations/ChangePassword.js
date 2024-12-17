"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordUseCase = void 0;
const User_1 = require("../../../../domain/entities/User");
const ErrorType_1 = require("../../../../domain/enums/Authenticate/AuthenticateUser/ErrorType");
const ErrorType_2 = require("../../../../domain/enums/user/ErrorType");
class ChangePasswordUseCase {
    constructor(userRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }
    async execute(userId, { oldPassword, newPassword }) {
        try {
            if (!newPassword || newPassword.length < 8) {
                return {
                    data: { error: ErrorType_2.UserErrorType.PasswordLengthTooShort },
                    success: false,
                };
            }
            const userExist = (await this.userRepository.findById(userId));
            if (!userExist) {
                return {
                    data: { error: ErrorType_2.UserErrorType.UserNotExist },
                    success: false,
                };
            }
            const password = await this.passwordHasher.hashPassword(newPassword);
            const matchPassword = await this.passwordHasher.comparePassword(oldPassword, userExist.password);
            if (!matchPassword) {
                return {
                    data: { error: ErrorType_1.AuthenticateUserErrorType.PasswordWrong },
                    success: false,
                };
            }
            const userEntity = User_1.UserEntity.update({
                password,
            });
            const user = await this.userRepository.update(userExist, userEntity);
            return { data: user, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.ChangePasswordUseCase = ChangePasswordUseCase;
//# sourceMappingURL=ChangePassword.js.map