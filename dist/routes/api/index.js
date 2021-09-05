"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizer_1 = require("../../utilities/resizer");
var api = express_1.default.Router();
api.use('/images', resizer_1.resizer, resizer_1.displayer);
exports.default = api;
