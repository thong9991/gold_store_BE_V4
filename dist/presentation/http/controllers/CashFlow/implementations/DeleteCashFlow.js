"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCashFlowController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class DeleteCashFlowController {
    constructor(deleteCashFlowUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.deleteCashFlowUseCase = deleteCashFlowUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        const id = httpRequest.path.id;
        const response = await this.deleteCashFlowUseCase.execute(id);
        if (!response.success) {
            error = this.httpErrors.error_400();
            return new HttpResponse_1.HttpResponse(error.statusCode, response.data);
        }
        const success = this.httpSuccess.success_200(response.data);
        return new HttpResponse_1.HttpResponse(success.statusCode, success.body);
    }
}
exports.DeleteCashFlowController = DeleteCashFlowController;
//# sourceMappingURL=DeleteCashFlow.js.map