"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class CreateOrderController {
    constructor(createOrderUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.createOrderUseCase = createOrderUseCase;
        this.httpErrors = httpErrors;
        this.httpSuccess = httpSuccess;
    }
    async handle(httpRequest) {
        let error;
        let response;
        if (httpRequest.body &&
            httpRequest.header &&
            Object.keys(httpRequest.body).length > 0) {
            const bodyParams = Object.keys(httpRequest.body);
            const headerParams = Object.keys(httpRequest.header);
            if (headerParams.includes('user_id') &&
                bodyParams.includes('orderExchanges') &&
                bodyParams.includes('orderSales') &&
                bodyParams.includes('total') &&
                bodyParams.includes('goldToCash') &&
                bodyParams.includes('discount') &&
                bodyParams.includes('description')) {
                const user_id = httpRequest.header.user_id;
                const createOrderRequestDTO = httpRequest.body;
                response = await this.createOrderUseCase.execute(user_id, {
                    ...createOrderRequestDTO,
                    staff: {
                        id: -1,
                        firstName: '',
                        lastName: '',
                        phone: '',
                        address: '',
                    },
                    isChecked: false,
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
            const success = this.httpSuccess.success_201(response.data);
            return new HttpResponse_1.HttpResponse(success.statusCode, success.body);
        }
        error = this.httpErrors.error_500();
        return new HttpResponse_1.HttpResponse(error.statusCode, error.body);
    }
}
exports.CreateOrderController = CreateOrderController;
//# sourceMappingURL=CreateOrder.js.map