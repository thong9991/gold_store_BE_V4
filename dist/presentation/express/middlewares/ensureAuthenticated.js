"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const AuthMessages_1 = require("../../../domain/enums/Authenticate/AuthMessages");
const TokenManager_1 = require("../../../infra/providers/TokenManager");
const ensureAuthenticated = (request, response, next) => {
    const authToken = request.headers.authorization;
    var user_id = request.headers.user_id;
    if (request.params && (!user_id || user_id == '')) {
        user_id = request.params.user_id;
    }
    if (!user_id || user_id == '') {
        return response.status(401).json({
            message: AuthMessages_1.AuthMessages.TokenInvalidOrExpired,
        });
    }
    if (!authToken) {
        return response.status(401).json({
            message: AuthMessages_1.AuthMessages.AuthorizationHeaderMissing,
        });
    }
    const [, token] = authToken.split(' ');
    const tokenManager = new TokenManager_1.TokenManager();
    if (!tokenManager.validateToken(token, user_id.toString(), user_id.includes('-'))) {
        return response.status(401).json({
            message: AuthMessages_1.AuthMessages.TokenInvalidOrExpired,
        });
    }
    return next();
};
exports.ensureAuthenticated = ensureAuthenticated;
//# sourceMappingURL=ensureAuthenticated.js.map