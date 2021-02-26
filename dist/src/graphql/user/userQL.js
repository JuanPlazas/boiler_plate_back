"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.userTypes = void 0;
// import { user } from './userQueries';
const userMutations_1 = require("./userMutations");
Object.defineProperty(exports, "createUser", { enumerable: true, get: function () { return userMutations_1.createUser; } });
const type_1 = __importDefault(require("./type"));
exports.userTypes = type_1.default;
