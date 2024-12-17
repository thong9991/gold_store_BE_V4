"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGoldPriceController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class CreateGoldPriceController {
    constructor(createGoldPriceUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.createGoldPriceUseCase = createGoldPriceUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        let response;
        if (httpRequest.body && Object.keys(httpRequest.body).length > 0) {
            const bodyParams = Object.keys(httpRequest.body);
            if (bodyParams.includes('goldType') &&
                bodyParams.includes('askPrice') &&
                bodyParams.includes('bidPrice')) {
                const createGoldPriceRequestDTO = httpRequest.body;
                response = await this.createGoldPriceUseCase.execute(createGoldPriceRequestDTO);
            }
            else {
                error = this.httpErrors.error_422();
                return new HttpResponse_1.HttpResponse(error.statusCode, error.body);
            }
            if (!response.success) {
                error = this.httpErrors.error_400();
                return new HttpResponse_1.HttpResponse(error.statusCode, response.data);
            }
            const success = this.httpSuccess.success_201(response.data);
            return new HttpResponse_1.HttpResponse(success.statusCode, success.body);
        }
        error = this.httpErrors.error_500();
        return new HttpResponse_1.HttpResponse(error.statusCode, error.body);
    }
}
exports.CreateGoldPriceController = CreateGoldPriceController;
//# sourceMappingURL=CreateGoldPrice.js.map