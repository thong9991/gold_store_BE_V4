"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpErrors = void 0;
class HttpErrors {
    error_422() {
        return {
            statusCode: 422,
            body: { error: 'Unprocessable Entity' },
        };
    }
    error_400() {
        return {
            statusCode: 400,
            body: { error: 'Bad Request' },
        };
    }
    error_404() {
        return {
            statusCode: 404,
            body: { error: 'Not Found' },
        };
    }
    error_500() {
        return {
            statusCode: 500,
            body: { error: 'Internal Error' },
        };
    }
}
exports.HttpErrors = HttpErrors;
//# sourceMappingURL=HttpErrors.js.map