"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSearchDataController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class GetSearchDataController {
    constructor(getAllSearchDataUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.getAllSearchDataUseCase = getAllSearchDataUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(_httpRequest) {
        let error;
        let response;
        response = await this.getAllSearchDataUseCase.execute();
        if (!response.success) {
            error = this.httpErrors.error_404();
            return new HttpResponse_1.HttpResponse(error.statusCode, response.data);
        }
        const success = this.httpSuccess.success_200(response.data);
        return new HttpResponse_1.HttpResponse(success.statusCode, success.body);
    }
}
exports.GetSearchDataController = GetSearchDataController;
//# sourceMappingURL=GetSearchData.js.map