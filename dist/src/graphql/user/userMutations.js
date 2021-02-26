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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const models_1 = __importDefault(require("../../models"));
const await_to_js_1 = __importDefault(require("await-to-js"));
const createUser = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, name, lastName, email, user, password, } = args.input;
    const [error, response] = yield await_to_js_1.default(models_1.default.User.create({
        type,
        name,
        lastName,
        email,
        user,
        password,
    }));
    if (error) {
        console.log('24 error >>>>>>', error);
        throw error;
    }
    return response;
});
exports.createUser = createUser;
