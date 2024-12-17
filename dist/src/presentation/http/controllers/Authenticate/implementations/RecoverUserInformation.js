"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverUserInformationController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class RecoverUserInformationController {
    constructor(recoverUserInformationUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.recoverUserInformationUseCase = recoverUserInformationUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        let response;
        if (httpRequest.body && Object.keys(httpRequest.body).length > 0) {
            const bodyParams = Object.keys(httpRequest.body);
            const user_id = httpRequest.path.user_id;
            if (bodyParams.includes('refreshTokenId')) {
                const recoverUserInformationDTO = httpRequest.body;
                response = await this.recoverUserInformationUseCase.execute({
                    ...recoverUserInformationDTO,
                    user_id: user_id,
                });
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
exports.RecoverUserInformationController = RecoverUserInformationController;
//# sourceMappingURL=RecoverUserInformation.js.map