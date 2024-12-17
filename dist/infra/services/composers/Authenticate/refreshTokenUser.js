"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenUserComposer = refreshTokenUserComposer;
const RefreshTokenUser_1 = require("../../../../app/useCases/Authenticate/implementations/RefreshTokenUser");
const RefreshTokenUser_2 = require("../../../../presentation/http/controllers/Authenticate/implementations/RefreshTokenUser");
const GenerateRefreshToken_1 = require("../../../providers/GenerateRefreshToken");
const TokenManager_1 = require("../../../providers/TokenManager");
const RefreshToken_1 = require("../../../repositories/typeorm/RefreshToken");
function refreshTokenUserComposer() {
    const refreshTokenRepository = new RefreshToken_1.RefreshTokenRepository();
    const refreshTokenGenerator = new GenerateRefreshToken_1.GenerateRefreshToken();
    const tokenManager = new TokenManager_1.TokenManager();
    const useCase = new RefreshTokenUser_1.RefreshTokenUserUseCase(refreshTokenRepository, refreshTokenGenerator, tokenManager);
    const controller = new RefreshTokenUser_2.RefreshTokenUserController(useCase);
    return controller;
}
//# sourceMappingURL=refreshTokenUser.js.map