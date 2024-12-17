"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAccountComposer = updateAccountComposer;
const UpdateAccount_1 = require("../../../../app/useCases/Profile/implementations/UpdateAccount");
const PasswordHasher_1 = require("../../../../infra/providers/PasswordHasher");
const UpdateAccount_2 = require("../../../../presentation/http/controllers/Profile/implementations/UpdateAccount");
const User_1 = require("../../../repositories/typeorm/User");
function updateAccountComposer() {
    const repostory = new User_1.UserRepository();
    const passwordHasher = new PasswordHasher_1.PasswordHasher();
    const useCase = new UpdateAccount_1.UpdateAccountUseCase(repostory, passwordHasher);
    const controller = new UpdateAccount_2.UpdateAccountController(useCase);
    return controller;
}
//# sourceMappingURL=updateAccount.js.map