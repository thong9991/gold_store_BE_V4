"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/user/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/user/SuccessType");
class DeleteUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userId) {
        try {
            const userExist = (await this.userRepository.findById(userId));
            if (!userExist) {
                return {
                    data: { error: ErrorType_1.UserErrorType.UserNotExist },
                    success: false,
                };
            }
            await this.userRepository.delete(userId);
            return { data: { msg: SuccessType_1.UserSuccessType.UserDeleted }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteUserUseCase = DeleteUserUseCase;
//# sourceMappingURL=DeleteUser.js.map