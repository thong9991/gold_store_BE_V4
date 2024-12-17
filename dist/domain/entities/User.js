"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(props) {
        this._role = props.role;
        this._email = props.email;
        this._username = props.username;
        this._password = props.password;
        this._fcmToken = props.fcmToken;
        this._staff = props.staff;
    }
    static create({ role, email, username, password, }) {
        return new UserEntity({ role, email, username, password });
    }
    static update(updatedUser) {
        return updatedUser;
    }
    get role() {
        return this._role;
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
    get fcmToken() {
        return this._fcmToken;
    }
    get staff() {
        return this._staff;
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=User.js.map