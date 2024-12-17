"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStaffComposer = createStaffComposer;
const CreateStaff_1 = require("../../../../app/useCases/Staff/implementations/CreateStaff");
const CreateStaff_2 = require("../../../../presentation/http/controllers/Staff/implementations/CreateStaff");
const Staff_1 = require("../../../repositories/typeorm/Staff");
function createStaffComposer() {
    const repostory = new Staff_1.StaffRepository();
    const useCase = new CreateStaff_1.CreateStaffUseCase(repostory);
    const controller = new CreateStaff_2.CreateStaffController(useCase);
    return controller;
}
//# sourceMappingURL=createStaff.js.map