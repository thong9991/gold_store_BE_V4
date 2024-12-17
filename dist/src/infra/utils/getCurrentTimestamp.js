"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentTimestamp = getCurrentTimestamp;
function getCurrentTimestamp() {
    const date = new Date();
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    const currentTimeStamp = new Date(date.getTime() + userTimezoneOffset).setMilliseconds(0);
    return new Date(currentTimeStamp);
}
//# sourceMappingURL=getCurrentTimestamp.js.map