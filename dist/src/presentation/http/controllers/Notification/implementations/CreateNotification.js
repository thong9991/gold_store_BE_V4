"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationController = void 0;
const HttpErrors_1 = require("../../../helpers/implementations/HttpErrors");
const HttpResponse_1 = require("../../../helpers/implementations/HttpResponse");
const HttpSuccess_1 = require("../../../helpers/implementations/HttpSuccess");
class CreateNotificationController {
    constructor(createNotificationUseCase, httpErrors = new HttpErrors_1.HttpErrors(), httpSuccess = new HttpSuccess_1.HttpSuccess()) {
        this.createNotificationUseCase = createNotificationUseCase;
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
                bodyParams.includes('title') &&
                bodyParams.includes('body') &&
                bodyParams.includes('data')) {
                const user_id = httpRequest.header.user_id;
                const createNotificationRequestDTO = httpRequest.body;
                response = await this.createNotificationUseCase.execute(user_id, {
                    ...createNotificationRequestDTO,
                    user: {
                        id: -1,
                        role: '',
                        email: '',
                        fcmToken: '',
                        username: '',
                        password: '',
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
exports.CreateNotificationController = CreateNotificationController;
//# sourceMappingURL=CreateNotification.js.map