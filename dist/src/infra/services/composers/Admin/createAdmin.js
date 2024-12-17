"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminComposer = createAdminComposer;
const CreateAdmin_1 = require("../../../../app/useCases/Admin/implementations/CreateAdmin");
const CreateAdmin_2 = require("../../../../presentation/http/controllers/Admin/implementations/CreateAdmin");
const PasswordHasher_1 = require("../../../providers/PasswordHasher");
const Admin_1 = require("../../../repositories/typeorm/Admin");
function createAdminComposer() {
    const repostory = new Admin_1.AdminRepository();
    const passwordHasher = new PasswordHasher_1.PasswordHasher();
    const useCase = new CreateAdmin_1.CreateAdminUseCase(repostory, passwordHasher);
    const controller = new CreateAdmin_2.CreateAdminController(useCase);
    return controller;
}
//# sourceMappingURL=createAdmin.js.map