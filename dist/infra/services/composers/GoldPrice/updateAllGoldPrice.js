"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAllGoldPriceComposer = updateAllGoldPriceComposer;
const UpdateAllGoldPrice_1 = require("../../../../app/useCases/GoldPrice/implementations/UpdateAllGoldPrice");
const UpdateAllGoldPrice_2 = require("../../../../presentation/http/controllers/GoldPrice/implementations/UpdateAllGoldPrice");
const GoldPrice_1 = require("../../../repositories/typeorm/GoldPrice");
const User_1 = require("../../../repositories/typeorm/User");
function updateAllGoldPriceComposer() {
    const goldPriceRepository = new GoldPrice_1.GoldPriceRepository();
    const userRepository = new User_1.UserRepository();
    const useCase = new UpdateAllGoldPrice_1.UpdateAllGoldPriceUseCase(goldPriceRepository, userRepository);
    const controller = new UpdateAllGoldPrice_2.UpdateAllGoldPriceController(useCase);
    return controller;
}
//# sourceMappingURL=updateAllGoldPrice.js.map