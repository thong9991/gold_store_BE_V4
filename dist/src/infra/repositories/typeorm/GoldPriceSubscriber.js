"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoldPriceEventSubscriber = void 0;
const typeorm_1 = require("typeorm");
const DimGoldPrice_1 = require("../../../domain/dtos/DimGoldPrice/DimGoldPrice");
const GoldPrice_1 = require("../../../domain/dtos/GoldPrice/GoldPrice");
const data_source_1 = require("../../database/typeorm/data_source");
const getCurrentTimestamp_1 = require("../../utils/getCurrentTimestamp");
const MAX_TIMESTAMP = new Date('2100-12-31T00:00:00');
let GoldPriceEventSubscriber = class GoldPriceEventSubscriber {
    listenTo() {
        return GoldPrice_1.GoldPriceDTO;
    }
    async afterInsert(event) {
        const { goldType, askPrice, bidPrice } = event.entity;
        const dimGoldPriceRepository = data_source_1.DataWarehouse.getRepository(DimGoldPrice_1.DimGoldPriceDTO);
        await dimGoldPriceRepository.save({
            goldType: goldType,
            bidPrice: bidPrice,
            askPrice: askPrice,
            effTime: (0, getCurrentTimestamp_1.getCurrentTimestamp)(),
            expTime: MAX_TIMESTAMP,
        });
    }
    async afterUpdate(event) {
        const { goldType, askPrice, bidPrice } = event.entity;
        const dimGoldPriceRepository = data_source_1.DataWarehouse.getRepository(DimGoldPrice_1.DimGoldPriceDTO);
        const currentTimeStamp = (0, getCurrentTimestamp_1.getCurrentTimestamp)();
        const result = await dimGoldPriceRepository
            .createQueryBuilder()
            .update(DimGoldPrice_1.DimGoldPriceDTO)
            .set({
            expTime: currentTimeStamp,
        })
            .where('goldType = :goldType AND expTime = :expTime', {
            goldType: goldType,
            expTime: MAX_TIMESTAMP,
        })
            .returning(['goldType', 'askPrice', 'bidPrice'])
            .updateEntity(true)
            .execute();
        const goldPrice = result.raw[0];
        await dimGoldPriceRepository.save({
            goldType: goldPrice['gold_type'],
            askPrice: askPrice !== null && askPrice !== void 0 ? askPrice : goldPrice['ask_price'],
            bidPrice: bidPrice !== null && bidPrice !== void 0 ? bidPrice : goldPrice['bid_price'],
            effTime: new Date(currentTimeStamp.getTime() + 1000),
            expTime: MAX_TIMESTAMP,
        });
    }
    async afterRemove(event) {
        const dimGoldPriceRepository = data_source_1.DataWarehouse.getRepository(DimGoldPrice_1.DimGoldPriceDTO);
        const currentTimeStamp = (0, getCurrentTimestamp_1.getCurrentTimestamp)();
        await dimGoldPriceRepository
            .createQueryBuilder()
            .update(DimGoldPrice_1.DimGoldPriceDTO)
            .set({
            expTime: currentTimeStamp,
        })
            .where('goldType = :goldType AND expTime > :expTime', {
            goldType: event.entityId,
            expTime: currentTimeStamp,
        })
            .updateEntity(true)
            .execute();
    }
};
exports.GoldPriceEventSubscriber = GoldPriceEventSubscriber;
exports.GoldPriceEventSubscriber = GoldPriceEventSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)()
], GoldPriceEventSubscriber);
//# sourceMappingURL=GoldPriceSubscriber.js.map