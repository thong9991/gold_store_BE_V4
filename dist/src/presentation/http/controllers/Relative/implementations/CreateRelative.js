"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRelativeController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class CreateRelativeController {
    constructor(createRelativeUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.createRelativeUseCase = createRelativeUseCase;
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
            if (pathStringParams.includes('user_id') &&
                bodyParams.includes('name') &&
                bodyParams.includes('relationship') &&
                bodyParams.includes('contact')) {
                const user_id = httpRequest.path.user_id;
                const createRelativeRequestDTO = httpRequest.body;
                response = await this.createRelativeUseCase.execute(user_id, {
                    ...createRelativeRequestDTO,
                    staff: {
                        id: -1,
                        firstName: '',
                        lastName: '',
                        phone: '',
                        address: '',
                    },
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
exports.CreateRelativeController = CreateRelativeController;
//# sourceMappingURL=CreateRelative.js.map