"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCashFlowComposer = getCashFlowComposer;
const GetAllCashFlow_1 = require("../../../../app/useCases/CashFlow/implementations/GetAllCashFlow");
const GetCashFlow_1 = require("../../../../presentation/http/controllers/CashFlow/implementations/GetCashFlow");
const CashFlow_1 = require("../../../repositories/typeorm/CashFlow");
function getCashFlowComposer() {
    const repository = new CashFlow_1.CashFlowRepository();
    const useCase = new GetAllCashFlow_1.GetAllCashFlowUseCase(repository);
    const controller = new GetCashFlow_1.GetCashFlowController(useCase);
    return controller;
}
//# sourceMappingURL=getCashFlow.js.map