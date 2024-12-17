"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCashDrawerComposer = updateCashDrawerComposer;
const UpdateCashDrawer_1 = require("../../../../app/useCases/CashDrawer/implementations/UpdateCashDrawer");
const UpdateCashDrawer_2 = require("../../../../presentation/http/controllers/CashDrawer/implementations/UpdateCashDrawer");
const CashDrawer_1 = require("../../../repositories/typeorm/CashDrawer");
function updateCashDrawerComposer() {
    const repostory = new CashDrawer_1.CashDrawerRepository();
    const useCase = new UpdateCashDrawer_1.UpdateCashDrawerUseCase(repostory);
    const controller = new UpdateCashDrawer_2.UpdateCashDrawerController(useCase);
    return controller;
}
//# sourceMappingURL=updateCashDrawer.js.map