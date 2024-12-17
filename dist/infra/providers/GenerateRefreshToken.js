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
exports.GenerateRefreshToken = void 0;
const dotenv = __importStar(require("dotenv"));
const jsonwebtoken_1 = require("jsonwebtoken");
dotenv.config();
class GenerateRefreshToken {
    async generateToken(token, isAdmin) {
        const secretKey = process.env.API_SECRET;
        if (!secretKey) {
            throw new Error('API_SECRET is missing in the environment variables.');
        }
        const generatedToken = (0, jsonwebtoken_1.sign)({}, secretKey, {
            subject: isAdmin ? `admin-${token}` : token,
            expiresIn: isAdmin ? '30m' : '1h',
        });
        return generatedToken;
    }
}
exports.GenerateRefreshToken = GenerateRefreshToken;
//# sourceMappingURL=GenerateRefreshToken.js.map