"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenEntity = void 0;
class RefreshTokenEntity {
    constructor(props) {
        this._user_id = props.user_id;
        this._user = props.user;
        this._createdAt = props.createdAt;
        this._expiresIn = props.expiresIn;
    }
    get user_id() {
        return this._user_id;
    }
    get user() {
        return this._user;
    }
    get expiresIn() {
        return this._expiresIn;
    }
    get createdAt() {
        return this._createdAt;
    }
}
exports.RefreshTokenEntity = RefreshTokenEntity;
//# sourceMappingURL=RefreshToken.js.map