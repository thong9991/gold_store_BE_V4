"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateAdminUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/Authenticate/AuthenticateUser/ErrorType");
const ErrorType_2 = require("../../../../domain/enums/user/ErrorType");
class AuthenticateAdminUseCase {
    constructor(adminRepository, refreshTokenRepository, passwordHasher, refreshTokenGenerator) {
        this.adminRepository = adminRepository;
        this.refreshTokenRepository = refreshTokenRepository;
        this.passwordHasher = passwordHasher;
        this.refreshTokenGenerator = refreshTokenGenerator;
    }
    async execute({ username, password, }) {
        try {
            const admin = (await this.adminRepository.findByUsername(username));
            if (!admin) {
                return { data: { error: ErrorType_2.UserErrorType.UserNotExist }, success: false };
            }
            const matchPassword = await this.passwordHasher.comparePassword(password, admin.password);
            if (!matchPassword) {
                return {
                    data: { error: ErrorType_1.AuthenticateUserErrorType.UsernameOrPasswordWrong },
                    success: false,
                };
            }
            const token = await this.refreshTokenGenerator.generateToken(admin.id.toString(), true);
            const refreshTokenFound = await this.refreshTokenRepository.findByUserId(-admin.id);
            if (refreshTokenFound) {
                await this.refreshTokenRepository.delete(-admin.id);
            }
            const refreshToken = await this.refreshTokenRepository.create(-admin.id);
            return { data: { token, refreshToken, user: admin }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.AuthenticateAdminUseCase = AuthenticateAdminUseCase;
//# sourceMappingURL=AuthenticateAdmin.js.map