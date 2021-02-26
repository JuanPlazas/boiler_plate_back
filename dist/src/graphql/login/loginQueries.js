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
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const await_to_js_1 = __importDefault(require("await-to-js"));
const models_1 = __importDefault(require("../../models"));
const config_1 = __importDefault(require("../../../config"));
const login = (args) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('8 login >>>>>>');
    const { user, password } = args.input;
    const [errorUser, responseUser] = yield await_to_js_1.default(models_1.default.User.findOne({
        attributes: [
            'id',
            'password'
        ],
        where: { user }
    }));
    if (errorUser) {
        throw errorUser;
    }
    if (!responseUser) {
        throw 'usuario no registrado';
    }
    if (password !== responseUser.password) {
        throw 'contraseña incorrecta';
    }
    const token = jsonwebtoken_1.default.sign({ expiresIn: '1d' }, config_1.default.TOKEN_AUTH);
    const [errorLogin, responseLogin] = yield await_to_js_1.default(models_1.default.Login.findOne({
        attributes: [
            'id'
        ],
        where: { user }
    }));
    if (errorLogin) {
        throw errorLogin;
    }
    if (!responseLogin) {
        const [errorCreateLogin, responseCreateLogin] = yield await_to_js_1.default(models_1.default.Login.create({
            user,
            token,
        }));
        if (errorCreateLogin) {
            throw errorCreateLogin;
        }
    }
    else {
        const [errorUpdateLogin, responseUpdateLogin] = yield await_to_js_1.default(models_1.default.Login.update({ token }, { where: { id: responseLogin.id } }));
        if (errorUpdateLogin) {
            throw errorUpdateLogin;
        }
    }
    return { user, token };
});
exports.login = login;
