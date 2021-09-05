"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayer = exports.resizer = void 0;
var fs_1 = require("fs");
var imageproc_1 = __importDefault(require("./imageproc"));
var imageretriever_1 = __importDefault(require("./imageretriever"));
var path_1 = __importDefault(require("path"));
function resizer(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var imageName_1, imageHeight_1, imageWidth_1, fileOpen, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    imageName_1 = req.query.filename;
                    imageHeight_1 = parseInt(req.query.height, 10);
                    imageWidth_1 = parseInt(req.query.width, 10);
                    res.locals.filename = req.query.filename;
                    res.locals.height = req.query.height;
                    res.locals.width = req.query.width;
                    return [4 /*yield*/, fs_1.promises.open(path_1.default.join(__dirname, "/../../public/assets/thumb/" + imageName_1 + "_thumb.jpg"), 'r')
                            .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!error) return [3 /*break*/, 2];
                                        return [4 /*yield*/, (0, imageproc_1.default)(imageName_1, imageHeight_1, imageWidth_1)];
                                    case 1:
                                        _a.sent();
                                        console.log('Image resized');
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    fileOpen = _a.sent();
                    return [4 /*yield*/, (fileOpen === null || fileOpen === void 0 ? void 0 : fileOpen.close())];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log('Image processing error');
                    return [3 /*break*/, 4];
                case 4:
                    next();
                    return [2 /*return*/];
            }
        });
    });
}
exports.resizer = resizer;
function displayer(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var imageWidth, imageHeight, getImage, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    imageWidth = req.query.width;
                    imageHeight = req.query.height;
                    return [4 /*yield*/, (0, imageretriever_1.default)(req.query.filename)];
                case 1:
                    getImage = _a.sent();
                    if (!(getImage.width === parseInt(imageWidth, 10) && getImage.height === parseInt(imageHeight, 10))) return [3 /*break*/, 3];
                    return [4 /*yield*/, res.sendFile(req.query.filename + "_thumb.jpg", { root: './public/assets/thumb/' })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    res.send('Error finding image, invalid parameter.');
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    res.send('Error finding image, file does not exist or invalid parameter.');
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.displayer = displayer;
