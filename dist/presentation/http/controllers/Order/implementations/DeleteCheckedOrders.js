"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCheckedOrdersController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class DeleteCheckedOrdersController {
    constructor(deleteCheckedOrdersUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.deleteCheckedOrdersUseCase = deleteCheckedOrdersUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        const response = await this.deleteCheckedOrdersUseCase.execute();
        if (!response.success) {
            error = this.httpErrors.error_400();
            return new HttpResponse_1.HttpResponse(error.statusCode, response.data);
        }
        const success = this.httpSuccess.success_200(response.data);
        return new HttpResponse_1.HttpResponse(success.statusCode, success.body);
    }
}
exports.DeleteCheckedOrdersController = DeleteCheckedOrdersController;
//# sourceMappingURL=DeleteCheckedOrders.js.map