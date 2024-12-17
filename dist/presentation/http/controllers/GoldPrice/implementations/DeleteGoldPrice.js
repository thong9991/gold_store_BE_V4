"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGoldPriceController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class DeleteGoldPriceController {
    constructor(deleteGoldPriceUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.deleteGoldPriceUseCase = deleteGoldPriceUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        const goldType = httpRequest.path.goldType;
        const response = await this.deleteGoldPriceUseCase.execute(goldType);
        if (!response.success) {
            error = this.httpErrors.error_400();
            return new HttpResponse_1.HttpResponse(error.statusCode, response.data);
        }
        const success = this.httpSuccess.success_200(response.data);
        return new HttpResponse_1.HttpResponse(success.statusCode, success.body);
    }
}
exports.DeleteGoldPriceController = DeleteGoldPriceController;
//# sourceMappingURL=DeleteGoldPrice.js.map