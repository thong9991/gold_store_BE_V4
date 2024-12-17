"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordComposer = changePasswordComposer;
const ChangePassword_1 = require("../../../../app/useCases/Profile/implementations/ChangePassword");
const PasswordHasher_1 = require("../../../../infra/providers/PasswordHasher");
const ChangePassword_2 = require("../../../../presentation/http/controllers/Profile/implementations/ChangePassword");
const User_1 = require("../../../repositories/typeorm/User");
function changePasswordComposer() {
    const repostory = new User_1.UserRepository();
    const passwordHasher = new PasswordHasher_1.PasswordHasher();
    const useCase = new ChangePassword_1.ChangePasswordUseCase(repostory, passwordHasher);
    const controller = new ChangePassword_2.ChangePasswordController(useCase);
    return controller;
}
//# sourceMappingURL=changePassword.js.map