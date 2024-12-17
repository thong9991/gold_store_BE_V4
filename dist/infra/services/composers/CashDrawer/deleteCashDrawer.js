"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCashDrawerComposer = deleteCashDrawerComposer;
const DeleteCashDrawer_1 = require("../../../../app/useCases/CashDrawer/implementations/DeleteCashDrawer");
const DeleteCashDrawer_2 = require("../../../../presentation/http/controllers/CashDrawer/implementations/DeleteCashDrawer");
const Asset_1 = require("../../../repositories/typeorm/Asset");
const CashDrawer_1 = require("../../../repositories/typeorm/CashDrawer");
function deleteCashDrawerComposer() {
    const cashDrawerRepostory = new CashDrawer_1.CashDrawerRepository();
    const assetRepository = new Asset_1.AssetRepository();
    const useCase = new DeleteCashDrawer_1.DeleteCashDrawerUseCase(cashDrawerRepostory, assetRepository);
    const controller = new DeleteCashDrawer_2.DeleteCashDrawerController(useCase);
    return controller;
}
//# sourceMappingURL=deleteCashDrawer.js.map