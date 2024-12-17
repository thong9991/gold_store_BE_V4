"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGoldPriceComposer = updateGoldPriceComposer;
const UpdateGoldPrice_1 = require("../../../../app/useCases/GoldPrice/implementations/UpdateGoldPrice");
const UpdateGoldPrice_2 = require("../../../../presentation/http/controllers/GoldPrice/implementations/UpdateGoldPrice");
const GoldPrice_1 = require("../../../repositories/typeorm/GoldPrice");
function updateGoldPriceComposer() {
    const repostory = new GoldPrice_1.GoldPriceRepository();
    const useCase = new UpdateGoldPrice_1.UpdateGoldPriceUseCase(repostory);
    const controller = new UpdateGoldPrice_2.UpdateGoldPriceController(useCase);
    return controller;
}
//# sourceMappingURL=updateGoldPrice.js.map