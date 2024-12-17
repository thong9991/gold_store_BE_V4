"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureStaffAuthorized = void 0;
const AuthMessages_1 = require("../../../domain/enums/Authenticate/AuthMessages");
const TokenManager_1 = require("../../../infra/providers/TokenManager");
const ensureStaffAuthorized = (request, response, next) => {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            message: AuthMessages_1.AuthMessages.AuthorizationHeaderMissing,
        });
    }
    const [, token] = authToken.split(' ');
    const tokenManager = new TokenManager_1.TokenManager();
    if (!tokenManager.validateToken(token, '0', false)) {
        return response.status(401).json({
            message: AuthMessages_1.AuthMessages.TokenInvalidOrExpired,
        });
    }
    return next();
};
exports.ensureStaffAuthorized = ensureStaffAuthorized;
//# sourceMappingURL=ensureStaffAuthorized.js.map