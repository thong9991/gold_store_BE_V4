"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCashDrawerController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class GetCashDrawerController {
    constructor(getAllCashDrawerUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.getAllCashDrawerUseCase = getAllCashDrawerUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        let response;
        if (httpRequest.query && Object.keys(httpRequest.query).length > 0) {
            const queryStringParams = Object.keys(httpRequest.query);
            if (queryStringParams.includes('page')) {
                const page = httpRequest.query.page;
                response = await this.getAllCashDrawerUseCase.execute(page);
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
exports.GetCashDrawerController = GetCashDrawerController;
//# sourceMappingURL=GetCashDrawer.js.map