"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/user/ErrorType");
class GetAllUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(page) {
        try {
            const users = await this.userRepository.findAll(page);
            if (users.total == 0) {
                return { data: { error: ErrorType_1.UserErrorType.UserNotFound }, success: false };
            }
            return { data: users, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllUserUseCase = GetAllUserUseCase;
//# sourceMappingURL=GetAllUser.js.map