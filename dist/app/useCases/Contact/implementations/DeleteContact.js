"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContactUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/Authenticate/AuthenticateUser/ErrorType");
const ErrorType_2 = require("../../../../domain/enums/contact/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/contact/SuccessType");
const ErrorType_3 = require("../../../../domain/enums/user/ErrorType");
class DeleteContactUseCase {
    constructor(contactRepository, relativeRepository, userRepository) {
        this.contactRepository = contactRepository;
        this.relativeRepository = relativeRepository;
        this.userRepository = userRepository;
    }
    async execute(userId, contactId) {
        try {
            const user = (await this.userRepository.findById(userId));
            if (!user) {
                return { data: { error: ErrorType_3.UserErrorType.UserNotExist }, success: false };
            }
            if (user.role != 'manager') {
                return {
                    data: { error: ErrorType_1.AuthenticateUserErrorType.AccessDenied },
                    success: false,
                };
            }
            const contactExist = (await this.contactRepository.findById(contactId));
            if (!contactExist) {
                return {
                    data: { error: ErrorType_2.ContactErrorType.ContactNotExist },
                    success: false,
                };
            }
            const relativeExist = await this.relativeRepository.findByContactId(contactId);
            if (relativeExist) {
                return {
                    data: { error: ErrorType_2.ContactErrorType.RelativeConstraint },
                    success: false,
                };
            }
            await this.contactRepository.delete(contactId);
            return { data: { msg: SuccessType_1.ContactSuccessType.ContactDeleted }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteContactUseCase = DeleteContactUseCase;
//# sourceMappingURL=DeleteContact.js.map