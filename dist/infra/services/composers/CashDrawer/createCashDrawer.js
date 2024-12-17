"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCashDrawerComposer = createCashDrawerComposer;
const CreateCashDrawer_1 = require("../../../../app/useCases/CashDrawer/implementations/CreateCashDrawer");
const CreateCashDrawer_2 = require("../../../../presentation/http/controllers/CashDrawer/implementations/CreateCashDrawer");
const CashDrawer_1 = require("../../../repositories/typeorm/CashDrawer");
function createCashDrawerComposer() {
    const repostory = new CashDrawer_1.CashDrawerRepository();
    const useCase = new CreateCashDrawer_1.CreateCashDrawerUseCase(repostory);
    const controller = new CreateCashDrawer_2.CreateCashDrawerController(useCase);
    return controller;
}
//# sourceMappingURL=createCashDrawer.js.map