"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recoverUserInformationComposer = recoverUserInformationComposer;
const RecoverUserInfomation_1 = require("../../../../app/useCases/Authenticate/implementations/RecoverUserInfomation");
const RecoverUserInformation_1 = require("../../../../presentation/http/controllers/Authenticate/implementations/RecoverUserInformation");
const TokenManager_1 = require("../../../providers/TokenManager");
const Admin_1 = require("../../../repositories/typeorm/Admin");
const RefreshToken_1 = require("../../../repositories/typeorm/RefreshToken");
const User_1 = require("../../../repositories/typeorm/User");
function recoverUserInformationComposer() {
    const userRepository = new User_1.UserRepository();
    const adminRepository = new Admin_1.AdminRepository();
    const refreshTokenRepository = new RefreshToken_1.RefreshTokenRepository();
    const tokenManager = new TokenManager_1.TokenManager();
    const useCase = new RecoverUserInfomation_1.RecoverUserInformationUseCase(userRepository, adminRepository, refreshTokenRepository, tokenManager);
    const controller = new RecoverUserInformation_1.RecoverUserInformationController(useCase);
    return controller;
}
//# sourceMappingURL=recoverUserInformation.js.map