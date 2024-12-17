"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactEntity = void 0;
class ContactEntity {
    constructor(props) {
        this._name = props.name;
        this._phoneType = props.phoneType;
        this._phone = props.phone;
        this._description = props.description;
    }
    static create({ name, phoneType, phone, description, }) {
        return new ContactEntity({
            name: name,
            phoneType: phoneType,
            phone: phone,
            description: description || '',
        });
    }
    static update(updatedContact) {
        return updatedContact;
    }
    get name() {
        return this._name;
    }
    get phoneType() {
        return this._phoneType;
    }
    get phone() {
        return this._phone;
    }
    get description() {
        return this._description;
    }
}
exports.ContactEntity = ContactEntity;
//# sourceMappingURL=Contact.js.map