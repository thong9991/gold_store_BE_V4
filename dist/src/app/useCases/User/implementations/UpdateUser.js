"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
const User_1 = require("../../../../domain/entities/User");
const ErrorType_1 = require("../../../../domain/enums/user/ErrorType");
class UpdateUserUseCase {
    constructor(userRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }
    async execute(userId, { staff, role, password }) {
        try {
            const userExist = (await this.userRepository.findById(userId));
            if (!userExist) {
                return {
                    data: { error: ErrorType_1.UserErrorType.UserNotExist },
                    success: false,
                };
            }
            if (password) {
                password = await this.passwordHasher.hashPassword(password);
            }
            const userEntity = User_1.UserEntity.update({
                staff,
                role,
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
exports.UpdateUserUseCase = UpdateUserUseCase;
//# sourceMappingURL=UpdateUser.js.map