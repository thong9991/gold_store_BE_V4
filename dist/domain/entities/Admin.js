"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminEntity = void 0;
class AdminEntity {
    constructor(props) {
        this._email = props.email;
        this._username = props.username;
        this._password = props.password;
    }
    static create({ email, username, password, }) {
        return new AdminEntity({ email, username, password });
    }
    static update(updatedAdmin) {
        return updatedAdmin;
    }
    get email() {
        return this._email;
    }
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
}
exports.AdminEntity = AdminEntity;
//# sourceMappingURL=Admin.js.map