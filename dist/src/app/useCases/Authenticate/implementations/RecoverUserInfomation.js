"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverUserInformationUseCase = void 0;
class RecoverUserInformationUseCase {
    constructor(userRepository, adminRepository, refreshTokenRepository, tokenManager) {
        this.userRepository = userRepository;
        this.adminRepository = adminRepository;
        this.refreshTokenRepository = refreshTokenRepository;
        this.tokenManager = tokenManager;
    }
    async execute({ user_id, refreshTokenId, }) {
        try {
            const refreshToken = (await this.refreshTokenRepository.findById(refreshTokenId));
            if (!refreshToken || refreshToken.user_id != user_id) {
                return {
                    data: { error: 'This refresh token is invalid.' },
                    success: false,
                };
            }
            var user;
            if (user_id > 0) {
                user = (await this.userRepository.findById(user_id));
            }
            else {
                user = (await this.adminRepository.findById(Math.abs(user_id)));
            }
            const refreshTokenExpired = this.tokenManager.validateTokenExpiration(refreshToken.expiresIn);
            if (refreshTokenExpired) {
                await this.refreshTokenRepository.delete(user_id);
                const newRefreshToken = await this.refreshTokenRepository.create(user_id);
                return {
                    data: { refreshToken: newRefreshToken, user },
                    success: true,
                };
            }
            return { data: user, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.RecoverUserInformationUseCase = RecoverUserInformationUseCase;
//# sourceMappingURL=RecoverUserInfomation.js.map