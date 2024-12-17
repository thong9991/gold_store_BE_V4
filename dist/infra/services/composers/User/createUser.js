"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserComposer = createUserComposer;
const CreateUser_1 = require("../../../../app/useCases/User/implementations/CreateUser");
const CreateUser_2 = require("../../../../presentation/http/controllers/User/implementations/CreateUser");
const PasswordHasher_1 = require("../../../providers/PasswordHasher");
const User_1 = require("../../../repositories/typeorm/User");
function createUserComposer() {
    const repostory = new User_1.UserRepository();
    const passwordHasher = new PasswordHasher_1.PasswordHasher();
    const useCase = new CreateUser_1.CreateUserUseCase(repostory, passwordHasher);
    const controller = new CreateUser_2.CreateUserController(useCase);
    return controller;
}
//# sourceMappingURL=createUser.js.map