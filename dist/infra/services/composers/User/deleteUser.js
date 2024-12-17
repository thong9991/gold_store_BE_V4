"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserComposer = deleteUserComposer;
const DeleteUser_1 = require("../../../../app/useCases/User/implementations/DeleteUser");
const DeleteUser_2 = require("../../../../presentation/http/controllers/User/implementations/DeleteUser");
const User_1 = require("../../../repositories/typeorm/User");
function deleteUserComposer() {
    const repostory = new User_1.UserRepository();
    const useCase = new DeleteUser_1.DeleteUserUseCase(repostory);
    const controller = new DeleteUser_2.DeleteUserController(useCase);
    return controller;
}
//# sourceMappingURL=deleteUser.js.map