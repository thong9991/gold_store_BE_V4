"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelativeEntity = void 0;
class RelativeEntity {
    constructor(props) {
        this._staff = props.staff;
        this._name = props.name;
        this._relationship = props.relationship;
        this._contact = props.contact;
    }
    static create({ staff, name, relationship, contact, }) {
        return new RelativeEntity({
            staff: staff,
            name: name,
            relationship: relationship,
            contact: contact,
        });
    }
    static update(updatedRelative) {
        return updatedRelative;
    }
    get staff() {
        return this._staff;
    }
    get name() {
        return this._name;
    }
    get relationship() {
        return this._relationship;
    }
    get contact() {
        return this._contact;
    }
}
exports.RelativeEntity = RelativeEntity;
//# sourceMappingURL=Relative.js.map