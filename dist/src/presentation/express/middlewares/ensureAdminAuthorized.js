"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAdminAuthorized = void 0;
const AuthMessages_1 = require("../../../domain/enums/Authenticate/AuthMessages");
const TokenManager_1 = require("../../../infra/providers/TokenManager");
const ensureAdminAuthorized = (request, response, next) => {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            message: AuthMessages_1.AuthMessages.AuthorizationHeaderMissing,
        });
    }
    const [, token] = authToken.split(' ');
    const tokenManager = new TokenManager_1.TokenManager();
    if (!tokenManager.validateToken(token, '0', true)) {
        return response.status(401).json({
            message: AuthMessages_1.AuthMessages.TokenInvalidOrExpired,
        });
    }
    return next();
};
exports.ensureAdminAuthorized = ensureAdminAuthorized;
//# sourceMappingURL=ensureAdminAuthorized.js.map