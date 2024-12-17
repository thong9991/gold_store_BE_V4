"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileComposer = updateProfileComposer;
const UpdateProfile_1 = require("../../../../app/useCases/Profile/implementations/UpdateProfile");
const UpdateProfile_2 = require("../../../../presentation/http/controllers/Profile/implementations/UpdateProfile");
const Staff_1 = require("../../../repositories/typeorm/Staff");
const User_1 = require("../../../repositories/typeorm/User");
function updateProfileComposer() {
    const userRepository = new User_1.UserRepository();
    const staffRepostory = new Staff_1.StaffRepository();
    const useCase = new UpdateProfile_1.UpdateProfileUseCase(staffRepostory, userRepository);
    const controller = new UpdateProfile_2.UpdateProfileController(useCase);
    return controller;
}
//# sourceMappingURL=updateProfile.js.map