"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdminController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class UpdateAdminController {
    constructor(updateAdminUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.updateAdminUseCase = updateAdminUseCase;
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
                (bodyParams.includes('email') ||
                    bodyParams.includes('username') ||
                    bodyParams.includes('password'))) {
                const id = httpRequest.path.id;
                const updateAdminRequestDTO = httpRequest.body;
                response = await this.updateAdminUseCase.execute(id, updateAdminRequestDTO);
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
exports.UpdateAdminController = UpdateAdminController;
//# sourceMappingURL=UpdateAdmin.js.map