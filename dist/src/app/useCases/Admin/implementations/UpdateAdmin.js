"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdminUseCase = void 0;
const Admin_1 = require("../../../../domain/entities/Admin");
const ErrorType_1 = require("../../../../domain/enums/user/ErrorType");
class UpdateAdminUseCase {
    constructor(adminRepository, passwordHasher) {
        this.adminRepository = adminRepository;
        this.passwordHasher = passwordHasher;
    }
    async execute(adminId, { email, username, password }) {
        try {
            const adminExist = (await this.adminRepository.findById(adminId));
            if (!adminExist) {
                return {
                    data: { error: ErrorType_1.UserErrorType.UserNotExist },
                    success: false,
                };
            }
            if (password) {
                password = await this.passwordHasher.hashPassword(password);
            }
            const adminEntity = Admin_1.AdminEntity.update({
                email,
                username,
                password,
            });
            const admin = await this.adminRepository.update(adminExist, adminEntity);
            return { data: admin, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.UpdateAdminUseCase = UpdateAdminUseCase;
//# sourceMappingURL=UpdateAdmin.js.map