"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllContactUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/contact/ErrorType");
class GetAllContactUseCase {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async execute(page) {
        try {
            const contacts = await this.contactRepository.findAll(page);
            if (contacts.total == 0) {
                return {
                    data: { error: ErrorType_1.ContactErrorType.ContactNotFound },
                    success: false,
                };
            }
            return { data: contacts, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllContactUseCase = GetAllContactUseCase;
//# sourceMappingURL=GetAllContact.js.map