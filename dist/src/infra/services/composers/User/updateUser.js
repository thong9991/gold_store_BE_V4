"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserComposer = updateUserComposer;
const UpdateUser_1 = require("../../../../app/useCases/User/implementations/UpdateUser");
const UpdateUser_2 = require("../../../../presentation/http/controllers/User/implementations/UpdateUser");
const PasswordHasher_1 = require("../../../providers/PasswordHasher");
const User_1 = require("../../../repositories/typeorm/User");
function updateUserComposer() {
    const repostory = new User_1.UserRepository();
    const passwordHasher = new PasswordHasher_1.PasswordHasher();
    const useCase = new UpdateUser_1.UpdateUserUseCase(repostory, passwordHasher);
    const controller = new UpdateUser_2.UpdateUserController(useCase);
    return controller;
}
//# sourceMappingURL=updateUser.js.map