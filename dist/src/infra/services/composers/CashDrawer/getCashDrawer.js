"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCashDrawerComposer = getCashDrawerComposer;
const GetAllCashDrawer_1 = require("../../../../app/useCases/CashDrawer/implementations/GetAllCashDrawer");
const GetCashDrawer_1 = require("../../../../presentation/http/controllers/CashDrawer/implementations/GetCashDrawer");
const CashDrawer_1 = require("../../../repositories/typeorm/CashDrawer");
function getCashDrawerComposer() {
    const repository = new CashDrawer_1.CashDrawerRepository();
    const useCase = new GetAllCashDrawer_1.GetAllCashDrawerUseCase(repository);
    const controller = new GetCashDrawer_1.GetCashDrawerController(useCase);
    return controller;
}
//# sourceMappingURL=getCashDrawer.js.map