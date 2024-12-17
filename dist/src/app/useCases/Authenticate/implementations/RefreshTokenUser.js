"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenUserUseCase = void 0;
const AuthMessages_1 = require("../../../../domain/enums/Authenticate/AuthMessages");
class RefreshTokenUserUseCase {
    constructor(refreshTokenRepository, refreshTokenGenerator, tokenManager) {
        this.refreshTokenRepository = refreshTokenRepository;
        this.refreshTokenGenerator = refreshTokenGenerator;
        this.tokenManager = tokenManager;
    }
    async execute({ refreshTokenId, }) {
        try {
            const refreshToken = (await this.refreshTokenRepository.findById(refreshTokenId));
            if (!refreshToken) {
                return { data: { error: 'Refresh token is invalid.' }, success: false };
            }
            const refreshTokenExpired = this.tokenManager.validateTokenExpiration(refreshToken.expiresIn);
            if (refreshTokenExpired) {
                return {
                    data: { error: AuthMessages_1.AuthMessages.TokenInvalidOrExpired },
                    success: false,
                };
            }
            const token = await this.refreshTokenGenerator.generateToken(Math.abs(refreshToken.user_id).toString(), refreshToken.user_id < 0);
            return { data: { token }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.RefreshTokenUserUseCase = RefreshTokenUserUseCase;
//# sourceMappingURL=RefreshTokenUser.js.map