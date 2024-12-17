"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfileUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/user/ErrorType");
class GetProfileUseCase {
    constructor(staffRepository) {
        this.staffRepository = staffRepository;
    }
    async execute(userId) {
        try {
            const staff = await this.staffRepository.findByUserId(userId);
            if (!staff) {
                return { data: { error: ErrorType_1.UserErrorType.UserNotExist }, success: false };
            }
            return { data: staff, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetProfileUseCase = GetProfileUseCase;
//# sourceMappingURL=GetProfile.js.map