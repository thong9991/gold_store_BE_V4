"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCashFlowComposer = createCashFlowComposer;
const CreateCashFlow_1 = require("../../../../app/useCases/CashFlow/implementations/CreateCashFlow");
const CreateCashFlow_2 = require("../../../../presentation/http/controllers/CashFlow/implementations/CreateCashFlow");
const CashFlow_1 = require("../../../repositories/typeorm/CashFlow");
function createCashFlowComposer() {
    const repostory = new CashFlow_1.CashFlowRepository();
    const useCase = new CreateCashFlow_1.CreateCashFlowUseCase(repostory);
    const controller = new CreateCashFlow_2.CreateCashFlowController(useCase);
    return controller;
}
//# sourceMappingURL=createCashFlow.js.map