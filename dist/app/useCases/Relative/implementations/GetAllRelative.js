"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllRelativeUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/relative/ErrorType");
class GetAllRelativeUseCase {
    constructor(relativeRepository) {
        this.relativeRepository = relativeRepository;
    }
    async execute(page) {
        try {
            const relatives = await this.relativeRepository.findAll(page);
            if (relatives.total == 0) {
                return {
                    data: { error: ErrorType_1.RelativeErrorType.RelativeNotFound },
                    success: false,
                };
            }
            return { data: relatives, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllRelativeUseCase = GetAllRelativeUseCase;
//# sourceMappingURL=GetAllRelative.js.map