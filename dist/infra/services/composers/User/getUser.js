"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserComposer = getUserComposer;
const GetAllUser_1 = require("../../../../app/useCases/User/implementations/GetAllUser");
const GetUser_1 = require("../../../../presentation/http/controllers/User/implementations/GetUser");
const User_1 = require("../../../repositories/typeorm/User");
function getUserComposer() {
    const repository = new User_1.UserRepository();
    const useCase = new GetAllUser_1.GetAllUserUseCase(repository);
    const controller = new GetUser_1.GetUserController(useCase);
    return controller;
}
//# sourceMappingURL=getUser.js.map