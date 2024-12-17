"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const ErrorType_1 = require("../enums/email/ErrorType");
class Email {
    get address() {
        return this._address;
    }
    constructor(props) {
        if (props.address == null ||
            !props.address.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error(ErrorType_1.EmailErrorType.InvalidEmail);
        }
        this._address = props.address;
    }
}
exports.Email = Email;
//# sourceMappingURL=Email.js.map