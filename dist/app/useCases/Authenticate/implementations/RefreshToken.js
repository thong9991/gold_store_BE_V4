"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenUseCase = void 0;
class RefreshTokenUseCase {
    constructor(refreshTokenRepository, refreshTokenGenerator, tokenManager) {
        this.refreshTokenRepository = refreshTokenRepository;
        this.refreshTokenGenerator = refreshTokenGenerator;
        this.tokenManager = tokenManager;
    }
    async execute(user_id) {
        try {
            const refreshToken = (await this.refreshTokenRepository.findByUserId(user_id));
            if (!refreshToken) {
                return { data: { error: 'Refresh token is invalid.' }, success: false };
            }
            const refreshTokenExpired = this.tokenManager.validateTokenExpiration(refreshToken.expiresIn);
            if (!refreshTokenExpired) {
                return {
                    data: { error: 'Your refresh token is still valid.' },
                    success: false,
                };
            }
            await this.refreshTokenRepository.delete(user_id);
            const token = await this.refreshTokenGenerator.generateToken(Math.abs(user_id).toString(), user_id < 0);
            const newRefreshToken = await this.refreshTokenRepository.create(user_id);
            return {
                data: { refreshToken: newRefreshToken, token },
                success: true,
            };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.RefreshTokenUseCase = RefreshTokenUseCase;
//# sourceMappingURL=RefreshToken.js.map