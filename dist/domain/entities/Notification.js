"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationEntity = void 0;
class NotificationEntity {
    constructor(props) {
        this._title = props.title;
        this._body = props.body;
        this._data = props.data;
        this._user = props.user;
    }
    static create({ title, body, data, user, }) {
        return new NotificationEntity({
            title: title,
            body: body,
            data: data,
            user: user,
        });
    }
    get title() {
        return this._title;
    }
    get body() {
        return this._body;
    }
    get data() {
        return this._data;
    }
    get user() {
        return this._user;
    }
}
exports.NotificationEntity = NotificationEntity;
//# sourceMappingURL=Notification.js.map