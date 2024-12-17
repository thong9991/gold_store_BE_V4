"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContactUseCase = void 0;
const Contact_1 = require("../../../../domain/entities/Contact");
const ErrorType_1 = require("../../../../domain/enums/Authenticate/AuthenticateUser/ErrorType");
const ErrorType_2 = require("../../../../domain/enums/contact/ErrorType");
const ErrorType_3 = require("../../../../domain/enums/user/ErrorType");
class UpdateContactUseCase {
    constructor(contactRepository, userRepository) {
        this.contactRepository = contactRepository;
        this.userRepository = userRepository;
    }
    async execute(userId, contactId, { name, phoneType, phone, description }) {
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
            const contactEntity = Contact_1.ContactEntity.update({
                name,
                phoneType,
                phone,
                description,
            });
            const contact = await this.contactRepository.update(contactExist, contactEntity);
            return { data: contact, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.UpdateContactUseCase = UpdateContactUseCase;
//# sourceMappingURL=UpdateContact.js.map