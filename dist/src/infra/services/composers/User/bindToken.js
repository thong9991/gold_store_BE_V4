"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindTokenComposer = bindTokenComposer;
const BindToken_1 = require("../../../../app/useCases/User/implementations/BindToken");
const BindToken_2 = require("../../../../presentation/http/controllers/User/implementations/BindToken");
const User_1 = require("../../../repositories/typeorm/User");
function bindTokenComposer() {
    const repostory = new User_1.UserRepository();
    const useCase = new BindToken_1.BindTokenUseCase(repostory);
    const controller = new BindToken_2.BindTokenController(useCase);
    return controller;
}
//# sourceMappingURL=bindToken.js.map