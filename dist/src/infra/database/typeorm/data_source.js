"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataWarehouse = exports.AppDataSource = void 0;
const dotenv = __importStar(require("dotenv"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Admin_1 = require("../../../domain/dtos/Admin/Admin");
const Asset_1 = require("../../../domain/dtos/Asset/Asset");
const RefreshToken_1 = require("../../../domain/dtos/Authenticate/RefreshToken");
const CashDrawer_1 = require("../../../domain/dtos/CashDrawer/CashDrawer");
const CashFlow_1 = require("../../../domain/dtos/CashFlow/CashFlow");
const Contact_1 = require("../../../domain/dtos/Contact/Contact");
const DimCategory_1 = require("../../../domain/dtos/DimCategory/DimCategory");
const DimDescription_1 = require("../../../domain/dtos/DimDescription/DimDescription");
const DimGoldPrice_1 = require("../../../domain/dtos/DimGoldPrice/DimGoldPrice");
const DimOrderDetails_1 = require("../../../domain/dtos/DimOrderDetails/DimOrderDetails");
const DimProduct_1 = require("../../../domain/dtos/DimProduct/DimProduct");
const DimStaff_1 = require("../../../domain/dtos/DimStaff/DimStaff");
const DimVendor_1 = require("../../../domain/dtos/DimVendor/DimVendor");
const FactOrderExchange_1 = require("../../../domain/dtos/FactOrderExchange/FactOrderExchange");
const FactOrderSale_1 = require("../../../domain/dtos/FactOrderSale/FactOrderSale");
const GoldPrice_1 = require("../../../domain/dtos/GoldPrice/GoldPrice");
const Notification_1 = require("../../../domain/dtos/Notification/Notification");
const OrderDetails_1 = require("../../../domain/dtos/OrderDetails/OrderDetails");
const OrderExchange_1 = require("../../../domain/dtos/OrderExchange/OrderExchange");
const OrderSale_1 = require("../../../domain/dtos/OrderSale/OrderSale");
const Product_1 = require("../../../domain/dtos/Product/Product");
const Relative_1 = require("../../../domain/dtos/Relative/Relative");
const Staff_1 = require("../../../domain/dtos/Staff/Staff");
const User_1 = require("../../../domain/dtos/User/User");
const Vendor_1 = require("../../../domain/dtos/Vendor/Vendor");
const GoldPriceSubscriber_1 = require("../../repositories/typeorm/GoldPriceSubscriber");
dotenv.config();
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DW_HOST, DW_PORT, DW_USERNAME, DW_PASSWORD, DW_DATABASE, DW_SCHEMA, NODE_ENV, } = process.env;
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: DB_HOST || 'localhost',
    port: parseInt(DB_PORT || '5432'),
    username: DB_USERNAME || 'postgres',
    password: DB_PASSWORD || 'postgres',
    database: DB_DATABASE || 'postgres',
    synchronize: true,
    cache: true,
    entities: [
        RefreshToken_1.RefreshTokenDTO,
        Notification_1.NotificationDTO,
        Admin_1.AdminDTO,
        Contact_1.ContactDTO,
        Relative_1.RelativeDTO,
        User_1.UserDTO,
        Staff_1.StaffDTO,
        Vendor_1.VendorDTO,
        GoldPrice_1.GoldPriceDTO,
        Product_1.ProductDTO,
        OrderSale_1.OrderSaleDTO,
        OrderExchange_1.OrderExchangeDTO,
        OrderDetails_1.OrderDetailsDTO,
        CashDrawer_1.CashDrawerDTO,
        Asset_1.AssetDTO,
        CashFlow_1.CashFlowDTO,
    ],
    migrations: ['src/database/migrations/*.ts'],
    subscribers: [GoldPriceSubscriber_1.GoldPriceEventSubscriber],
});
exports.DataWarehouse = new typeorm_1.DataSource({
    type: 'postgres',
    host: DW_HOST || 'localhost',
    port: parseInt(DW_PORT || '5433'),
    username: DW_USERNAME || 'loader',
    password: DW_PASSWORD || 'loader',
    database: DW_DATABASE || 'MyDW',
    schema: DW_SCHEMA || 'core',
    entities: [
        DimGoldPrice_1.DimGoldPriceDTO,
        DimVendor_1.DimVendorDTO,
        DimCategory_1.DimCategoryDTO,
        DimProduct_1.DimProductDTO,
        DimDescription_1.DimDescriptionDTO,
        DimStaff_1.DimStaffDTO,
        DimOrderDetails_1.DimOrderDetailsDTO,
        FactOrderExchange_1.FactOrderExchangeDTO,
        FactOrderSale_1.FactOrderSaleDTO,
    ],
    migrations: [__dirname + '/migration/*.ts'],
});
//# sourceMappingURL=data_source.js.map