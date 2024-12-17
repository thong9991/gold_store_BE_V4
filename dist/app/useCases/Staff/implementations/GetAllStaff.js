"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllStaffUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/staff/ErrorType");
class GetAllStaffUseCase {
    constructor(staffRepository) {
        this.staffRepository = staffRepository;
    }
    async execute(page) {
        try {
            if (page == -1) {
                const staffs = await this.staffRepository.findAllDataNoPaging();
                return { data: staffs, success: true };
            }
            const staffs = await this.staffRepository.findAll(page);
            if (staffs.total == 0) {
                return {
                    data: { error: ErrorType_1.StaffErrorType.StaffNotFound },
                    success: false,
                };
            }
            return { data: staffs, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllStaffUseCase = GetAllStaffUseCase;
//# sourceMappingURL=GetAllStaff.js.map