"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllSearchDataUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/contact/ErrorType");
class GetAllSearchDataUseCase {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async execute() {
        try {
            const contacts = await this.contactRepository.findAllSearchData();
            if (contacts.length == 0) {
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
exports.GetAllSearchDataUseCase = GetAllSearchDataUseCase;
//# sourceMappingURL=GetAllSearchData.js.map