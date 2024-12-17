"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffEntity = void 0;
class StaffEntity {
    constructor(props) {
        this._firstName = props.firstName;
        this._lastName = props.lastName;
        this._phone = props.phone;
        this._address = props.address;
    }
    static create({ firstName, lastName, phone, address, }) {
        return new StaffEntity({
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            address: address || '',
        });
    }
    static update(updatedStaff) {
        return updatedStaff;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get phone() {
        return this._phone;
    }
    get address() {
        return this._address;
    }
}
exports.StaffEntity = StaffEntity;
//# sourceMappingURL=Staff.js.map