"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAdminComposer = initAdminComposer;
const CreateAdmin_1 = require("../../../../app/useCases/Admin/implementations/CreateAdmin");
const InitAdmin_1 = require("../../../../presentation/http/controllers/Admin/implementations/InitAdmin");
const PasswordHasher_1 = require("../../../providers/PasswordHasher");
const Admin_1 = require("../../../repositories/typeorm/Admin");
function initAdminComposer() {
    const repostory = new Admin_1.AdminRepository();
    const passwordHasher = new PasswordHasher_1.PasswordHasher();
    const useCase = new CreateAdmin_1.CreateAdminUseCase(repostory, passwordHasher);
    const controller = new InitAdmin_1.InitAdminController(useCase);
    return controller;
}
//# sourceMappingURL=initAdmin.js.map