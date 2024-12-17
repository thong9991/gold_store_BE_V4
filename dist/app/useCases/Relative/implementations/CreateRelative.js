"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRelativeUseCase = void 0;
const Contact_1 = require("../../../../domain/entities/Contact");
const Relative_1 = require("../../../../domain/entities/Relative");
const ErrorType_1 = require("../../../../domain/enums/staff/ErrorType");
class CreateRelativeUseCase {
    constructor(relativeRepository, staffRepository, contactRepository) {
        this.relativeRepository = relativeRepository;
        this.staffRepository = staffRepository;
        this.contactRepository = contactRepository;
    }
    async execute(userId, { name, relationship, contact }) {
        try {
            const staffExist = (await this.staffRepository.findByUserId(userId));
            if (!staffExist) {
                return {
                    data: { error: ErrorType_1.StaffErrorType.StaffNotFound },
                    success: false,
                };
            }
            const contactEntity = Contact_1.ContactEntity.create(contact);
            const savedContact = await this.contactRepository.create(contactEntity);
            const relativeEntity = Relative_1.RelativeEntity.create({
                contact: savedContact,
                staff: staffExist,
                name,
                relationship,
            });
            const relative = await this.relativeRepository.create(relativeEntity);
            return { data: relative, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateRelativeUseCase = CreateRelativeUseCase;
//# sourceMappingURL=CreateRelative.js.map