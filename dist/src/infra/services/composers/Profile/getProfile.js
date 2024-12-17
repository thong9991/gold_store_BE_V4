"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileComposer = getProfileComposer;
const GetProfile_1 = require("../../../../app/useCases/Profile/implementations/GetProfile");
const GetProfile_2 = require("../../../../presentation/http/controllers/Profile/implementations/GetProfile");
const Staff_1 = require("../../../repositories/typeorm/Staff");
function getProfileComposer() {
    const repository = new Staff_1.StaffRepository();
    const useCase = new GetProfile_1.GetProfileUseCase(repository);
    const controller = new GetProfile_2.GetProfileController(useCase);
    return controller;
}
//# sourceMappingURL=getProfile.js.map