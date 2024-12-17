"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAdminUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/user/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/user/SuccessType");
class DeleteAdminUseCase {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    async execute(adminId) {
        try {
            const adminExist = (await this.adminRepository.findById(adminId));
            if (!adminExist) {
                return {
                    data: { error: ErrorType_1.UserErrorType.UserNotExist },
                    success: false,
                };
            }
            await this.adminRepository.delete(adminId);
            return { data: { msg: SuccessType_1.UserSuccessType.UserDeleted }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteAdminUseCase = DeleteAdminUseCase;
//# sourceMappingURL=DeleteAdmin.js.map