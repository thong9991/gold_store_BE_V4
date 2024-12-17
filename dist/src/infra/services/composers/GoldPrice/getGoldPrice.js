"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoldPriceComposer = getGoldPriceComposer;
const GetAllGoldPrice_1 = require("../../../../app/useCases/GoldPrice/implementations/GetAllGoldPrice");
const GetGoldPrice_1 = require("../../../../presentation/http/controllers/GoldPrice/implementations/GetGoldPrice");
const GoldPrice_1 = require("../../../repositories/typeorm/GoldPrice");
function getGoldPriceComposer() {
    const repository = new GoldPrice_1.GoldPriceRepository();
    const useCase = new GetAllGoldPrice_1.GetAllGoldPriceUseCase(repository);
    const controller = new GetGoldPrice_1.GetGoldPriceController(useCase);
    return controller;
}
//# sourceMappingURL=getGoldPrice.js.map