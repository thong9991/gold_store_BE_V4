"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRelativeController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class UpdateRelativeController {
    constructor(updateRelativeUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.updateRelativeUseCase = updateRelativeUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        let response;
        if (httpRequest.body &&
            httpRequest.path &&
            Object.keys(httpRequest.body).length > 0) {
            const bodyParams = Object.keys(httpRequest.body);
            const pathStringParams = Object.keys(httpRequest.path);
            if (pathStringParams.includes('id') &&
                (bodyParams.includes('name') || bodyParams.includes('relationship'))) {
                const id = httpRequest.path.id;
                const updateRelativeRequestDTO = httpRequest.body;
                response = await this.updateRelativeUseCase.execute(id, updateRelativeRequestDTO);
            }
            else {
                error = this.httpErrors.error_422();
                return new HttpResponse_1.HttpResponse(error.statusCode, error.body);
            }
            if (!response.success) {
                error = this.httpErrors.error_400();
                return new HttpResponse_1.HttpResponse(error.statusCode, response.data);
            }
            const success = this.httpSuccess.success_200(response.data);
            return new HttpResponse_1.HttpResponse(success.statusCode, success.body);
        }
        error = this.httpErrors.error_500();
        return new HttpResponse_1.HttpResponse(error.statusCode, error.body);
    }
}
exports.UpdateRelativeController = UpdateRelativeController;
//# sourceMappingURL=UpdateRelative.js.map