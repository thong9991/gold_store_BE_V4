"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAdapter = expressAdapter;
const HttpRequest_1 = require("../http/helpers/implementations/HttpRequest");
async function expressAdapter(request, apiRoute) {
    const httpRequest = new HttpRequest_1.HttpRequest({
        header: request.headers,
        body: request.body,
        path: request.params,
        query: request.query,
    });
    const response = await apiRoute.handle(httpRequest);
    return response;
}
//# sourceMappingURL=express.js.map