"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminUseCase = void 0;
const Admin_1 = require("../../../../domain/entities/Admin");
const ErrorType_1 = require("../../../../domain/enums/user/ErrorType");
class CreateAdminUseCase {
    constructor(adminRepository, passwordHasher) {
        this.adminRepository = adminRepository;
        this.passwordHasher = passwordHasher;
    }
    async execute({ email, username, password, }) {
        try {
            const adminExist = (await this.adminRepository.findByUsername(username));
            if (adminExist) {
                return {
                    data: { error: ErrorType_1.UserErrorType.UserAlreadyExists },
                    success: false,
                };
            }
            const hashedPassword = await this.passwordHasher.hashPassword(password);
            const adminEntity = Admin_1.AdminEntity.create({
                email,
                username,
                password: hashedPassword,
            });
            const admin = await this.adminRepository.create(adminEntity);
            return { data: admin, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateAdminUseCase = CreateAdminUseCase;
//# sourceMappingURL=CreateAdmin.js.map