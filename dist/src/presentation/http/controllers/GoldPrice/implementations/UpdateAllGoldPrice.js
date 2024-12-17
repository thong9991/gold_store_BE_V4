"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAllGoldPriceController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class UpdateAllGoldPriceController {
    constructor(updateAllGoldPriceUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.updateAllGoldPriceUseCase = updateAllGoldPriceUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        let response;
        if (httpRequest.header &&
            httpRequest.body &&
            Object.keys(httpRequest.header).length > 0 &&
            Object.keys(httpRequest.body).length > 0) {
            const bodyParams = Object.keys(httpRequest.body);
            const headersParams = Object.keys(httpRequest.header);
            if (headersParams.includes('user_id') &&
                bodyParams.includes('goldPrices')) {
                const user_id = httpRequest.header.user_id;
                const updateGoldPriceRequestDTO = httpRequest.body;
                response = await this.updateAllGoldPriceUseCase.execute(user_id, updateGoldPriceRequestDTO.goldPrices);
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
exports.UpdateAllGoldPriceController = UpdateAllGoldPriceController;
//# sourceMappingURL=UpdateAllGoldPrice.js.map