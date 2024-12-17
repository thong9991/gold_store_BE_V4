"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccountComposer = deleteAccountComposer;
const DeleteUser_1 = require("../../../../app/useCases/User/implementations/DeleteUser");
const DeleteAccount_1 = require("../../../../presentation/http/controllers/Profile/implementations/DeleteAccount");
const User_1 = require("../../../repositories/typeorm/User");
function deleteAccountComposer() {
    const repostory = new User_1.UserRepository();
    const useCase = new DeleteUser_1.DeleteUserUseCase(repostory);
    const controller = new DeleteAccount_1.DeleteAccountController(useCase);
    return controller;
}
//# sourceMappingURL=deleteAccount.js.map