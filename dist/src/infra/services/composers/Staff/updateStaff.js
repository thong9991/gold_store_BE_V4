"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStaffComposer = updateStaffComposer;
const UpdateStaff_1 = require("../../../../app/useCases/Staff/implementations/UpdateStaff");
const UpdateStaff_2 = require("../../../../presentation/http/controllers/Staff/implementations/UpdateStaff");
const Staff_1 = require("../../../repositories/typeorm/Staff");
function updateStaffComposer() {
    const repostory = new Staff_1.StaffRepository();
    const useCase = new UpdateStaff_1.UpdateStaffUseCase(repostory);
    const controller = new UpdateStaff_2.UpdateStaffController(useCase);
    return controller;
}
//# sourceMappingURL=updateStaff.js.map