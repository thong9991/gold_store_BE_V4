"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileUseCase = void 0;
const Staff_1 = require("../../../../domain/entities/Staff");
const User_1 = require("../../../../domain/entities/User");
const ErrorType_1 = require("../../../../domain/enums/user/ErrorType");
class UpdateProfileUseCase {
    constructor(staffRepository, userRepository) {
        this.staffRepository = staffRepository;
        this.userRepository = userRepository;
    }
    async execute(userId, { firstName, lastName, phone, address }) {
        try {
            const staffExist = (await this.staffRepository.findByUserId(userId));
            if (staffExist) {
                const staffEntity = Staff_1.StaffEntity.update({
                    firstName,
                    lastName,
                    phone,
                    address,
                });
                const staff = await this.staffRepository.update(staffExist, staffEntity);
                return { data: staff, success: true };
            }
            const userExist = (await this.userRepository.findById(userId));
            if (!userExist) {
                return {
                    data: { error: ErrorType_1.UserErrorType.UserNotFound },
                    success: false,
                };
            }
            const staffEntity = Staff_1.StaffEntity.create({
                firstName: firstName || '',
                lastName: lastName || '',
                phone: phone || '',
                address: address || '',
            });
            const staff = await this.staffRepository.create(staffEntity);
            const userEntity = User_1.UserEntity.update({
                ...userExist,
                staff: staff,
            });
            await this.userRepository.update(userExist, userEntity);
            return { data: staff, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.UpdateProfileUseCase = UpdateProfileUseCase;
//# sourceMappingURL=UpdateProfile.js.map