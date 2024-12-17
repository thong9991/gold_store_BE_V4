"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class CreateProductController {
    constructor(createProductUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.createProductUseCase = createProductUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        let response;
        if (httpRequest.body && Object.keys(httpRequest.body).length > 0) {
            const bodyParams = Object.keys(httpRequest.body);
            if (bodyParams.includes('productName') &&
                bodyParams.includes('category') &&
                bodyParams.includes('goldPrice') &&
                bodyParams.includes('totalWeight') &&
                bodyParams.includes('goldWeight') &&
                bodyParams.includes('gemWeight') &&
                bodyParams.includes('wage') &&
                bodyParams.includes('vendor')) {
                const createProductRequestDTO = httpRequest.body;
                response = await this.createProductUseCase.execute(createProductRequestDTO);
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
exports.CreateProductController = CreateProductController;
//# sourceMappingURL=CreateProduct.js.map