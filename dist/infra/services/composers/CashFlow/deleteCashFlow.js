"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCashFlowComposer = deleteCashFlowComposer;
const DeleteCashFlow_1 = require("../../../../app/useCases/CashFlow/implementations/DeleteCashFlow");
const DeleteCashFlow_2 = require("../../../../presentation/http/controllers/CashFlow/implementations/DeleteCashFlow");
const CashFlow_1 = require("../../../repositories/typeorm/CashFlow");
function deleteCashFlowComposer() {
    const repostory = new CashFlow_1.CashFlowRepository();
    const useCase = new DeleteCashFlow_1.DeleteCashFlowUseCase(repostory);
    const controller = new DeleteCashFlow_2.DeleteCashFlowController(useCase);
    return controller;
}
//# sourceMappingURL=deleteCashFlow.js.map