"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAssetController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class GetAssetController {
    constructor(getAllAssetUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.getAllAssetUseCase = getAllAssetUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        let response;
        if (httpRequest.query && Object.keys(httpRequest.query).length > 0) {
            const queryStringParams = Object.keys(httpRequest.query);
            if (queryStringParams.includes('drawer_id') &&
                queryStringParams.includes('page')) {
                const request = httpRequest.query;
                response = await this.getAllAssetUseCase.execute(request.drawer_id);
            }
            else {
                error = this.httpErrors.error_422();
                return new HttpResponse_1.HttpResponse(error.statusCode, error.body);
            }
            if (!response.success) {
                error = this.httpErrors.error_404();
                return new HttpResponse_1.HttpResponse(error.statusCode, response.data);
            }
            const success = this.httpSuccess.success_200(response.data);
            return new HttpResponse_1.HttpResponse(success.statusCode, success.body);
        }
        error = this.httpErrors.error_500();
        return new HttpResponse_1.HttpResponse(error.statusCode, error.body);
    }
}
exports.GetAssetController = GetAssetController;
//# sourceMappingURL=GetAsset.js.map