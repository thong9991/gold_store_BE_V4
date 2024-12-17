"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllAdminUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/user/ErrorType");
class GetAllAdminUseCase {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    async execute(page) {
        try {
            const admins = await this.adminRepository.findAll(page);
            if (admins.total == 0) {
                return { data: { error: ErrorType_1.UserErrorType.UserNotFound }, success: false };
            }
            return { data: admins, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllAdminUseCase = GetAllAdminUseCase;
//# sourceMappingURL=GetAllAdmin.js.map