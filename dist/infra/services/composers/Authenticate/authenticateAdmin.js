"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateAdminComposer = authenticateAdminComposer;
const AuthenticateAdmin_1 = require("../../../../app/useCases/Authenticate/implementations/AuthenticateAdmin");
const AuthenticateAdmin_2 = require("../../../../presentation/http/controllers/Authenticate/implementations/AuthenticateAdmin");
const GenerateRefreshToken_1 = require("../../../providers/GenerateRefreshToken");
const PasswordHasher_1 = require("../../../providers/PasswordHasher");
const Admin_1 = require("../../../repositories/typeorm/Admin");
const RefreshToken_1 = require("../../../repositories/typeorm/RefreshToken");
function authenticateAdminComposer() {
    const userRepository = new Admin_1.AdminRepository();
    const refreshTokenRepository = new RefreshToken_1.RefreshTokenRepository();
    const passwordHasher = new PasswordHasher_1.PasswordHasher();
    const refreshTokenGenerator = new GenerateRefreshToken_1.GenerateRefreshToken();
    const useCase = new AuthenticateAdmin_1.AuthenticateAdminUseCase(userRepository, refreshTokenRepository, passwordHasher, refreshTokenGenerator);
    const controller = new AuthenticateAdmin_2.AuthenticateAdminController(useCase);
    return controller;
}
//# sourceMappingURL=authenticateAdmin.js.map