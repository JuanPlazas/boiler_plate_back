"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.loginTypes = void 0;
const loginQueries_1 = require("./loginQueries");
Object.defineProperty(exports, "login", { enumerable: true, get: function () { return loginQueries_1.login; } });
const type_1 = __importDefault(require("./type"));
exports.loginTypes = type_1.default;
