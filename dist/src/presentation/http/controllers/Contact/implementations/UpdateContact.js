"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContactController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class UpdateContactController {
    constructor(updateContactUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.updateContactUseCase = updateContactUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        let response;
        if (httpRequest.header &&
            httpRequest.body &&
            httpRequest.path &&
            Object.keys(httpRequest.header).length > 0 &&
            Object.keys(httpRequest.body).length > 0) {
            const headerParams = Object.keys(httpRequest.header);
            const bodyParams = Object.keys(httpRequest.body);
            const pathStringParams = Object.keys(httpRequest.path);
            if (headerParams.includes('user_id') &&
                pathStringParams.includes('id') &&
                (bodyParams.includes('name') ||
                    bodyParams.includes('phoneType') ||
                    bodyParams.includes('phone') ||
                    bodyParams.includes('description'))) {
                const user_id = httpRequest.header.user_id;
                const id = httpRequest.path.id;
                const updateContactRequestDTO = httpRequest.body;
                response = await this.updateContactUseCase.execute(user_id, id, updateContactRequestDTO);
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
exports.UpdateContactController = UpdateContactController;
//# sourceMappingURL=UpdateContact.js.map