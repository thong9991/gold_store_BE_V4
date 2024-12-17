"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGoldPriceComposer = createGoldPriceComposer;
const CreateGoldPrice_1 = require("../../../../app/useCases/GoldPrice/implementations/CreateGoldPrice");
const CreateGoldPrice_2 = require("../../../../presentation/http/controllers/GoldPrice/implementations/CreateGoldPrice");
const GoldPrice_1 = require("../../../repositories/typeorm/GoldPrice");
function createGoldPriceComposer() {
    const repostory = new GoldPrice_1.GoldPriceRepository();
    const useCase = new CreateGoldPrice_1.CreateGoldPriceUseCase(repostory);
    const controller = new CreateGoldPrice_2.CreateGoldPriceController(useCase);
    return controller;
}
//# sourceMappingURL=createGoldPrice.js.map