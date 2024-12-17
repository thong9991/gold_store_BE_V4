"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenComposer = refreshTokenComposer;
const RefreshToken_1 = require("../../../../app/useCases/Authenticate/implementations/RefreshToken");
const RefreshToken_2 = require("../../../../presentation/http/controllers/Authenticate/implementations/RefreshToken");
const GenerateRefreshToken_1 = require("../../../providers/GenerateRefreshToken");
const TokenManager_1 = require("../../../providers/TokenManager");
const RefreshToken_3 = require("../../../repositories/typeorm/RefreshToken");
function refreshTokenComposer() {
    const refreshTokenRepository = new RefreshToken_3.RefreshTokenRepository();
    const refreshTokenGenerator = new GenerateRefreshToken_1.GenerateRefreshToken();
    const tokenManager = new TokenManager_1.TokenManager();
    const useCase = new RefreshToken_1.RefreshTokenUseCase(refreshTokenRepository, refreshTokenGenerator, tokenManager);
    const controller = new RefreshToken_2.RefreshTokenController(useCase);
    return controller;
}
//# sourceMappingURL=refreshToken.js.map