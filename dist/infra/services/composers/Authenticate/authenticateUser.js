"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUserComposer = authenticateUserComposer;
const AuthenticateUser_1 = require("../../../../app/useCases/Authenticate/implementations/AuthenticateUser");
const AuthenticateUser_2 = require("../../../../presentation/http/controllers/Authenticate/implementations/AuthenticateUser");
const GenerateRefreshToken_1 = require("../../../providers/GenerateRefreshToken");
const PasswordHasher_1 = require("../../../providers/PasswordHasher");
const RefreshToken_1 = require("../../../repositories/typeorm/RefreshToken");
const User_1 = require("../../../repositories/typeorm/User");
function authenticateUserComposer() {
    const userRepository = new User_1.UserRepository();
    const refreshTokenRepository = new RefreshToken_1.RefreshTokenRepository();
    const passwordHasher = new PasswordHasher_1.PasswordHasher();
    const refreshTokenGenerator = new GenerateRefreshToken_1.GenerateRefreshToken();
    const useCase = new AuthenticateUser_1.AuthenticateUserUseCase(userRepository, refreshTokenRepository, passwordHasher, refreshTokenGenerator);
    const controller = new AuthenticateUser_2.AuthenticateUserController(useCase);
    return controller;
}
//# sourceMappingURL=authenticateUser.js.map