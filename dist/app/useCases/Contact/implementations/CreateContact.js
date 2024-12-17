"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactUseCase = void 0;
const Contact_1 = require("../../../../domain/entities/Contact");
class CreateContactUseCase {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async execute({ name, phoneType, phone, description, }) {
        try {
            const contactEntity = Contact_1.ContactEntity.create({
                name,
                phoneType,
                phone,
                description,
            });
            const contact = await this.contactRepository.create(contactEntity);
            return { data: contact, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateContactUseCase = CreateContactUseCase;
//# sourceMappingURL=CreateContact.js.map