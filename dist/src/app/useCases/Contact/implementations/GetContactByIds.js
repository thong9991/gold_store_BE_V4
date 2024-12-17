"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetContactByIdsUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/contact/ErrorType");
class GetContactByIdsUseCase {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async execute(idList) {
        try {
            const contacts = await this.contactRepository.findByIds(idList);
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
exports.GetContactByIdsUseCase = GetContactByIdsUseCase;
//# sourceMappingURL=GetContactByIds.js.map