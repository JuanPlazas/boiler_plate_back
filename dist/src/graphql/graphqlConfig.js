"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const loginQL_1 = require("./login/loginQL");
const userQL_1 = require("./user/userQL");
var schema = graphql_1.buildSchema(`
  ${loginQL_1.loginTypes}
  ${userQL_1.userTypes}

  type Query {
    login(input: LoginInput): LoginResponse
  },

  type Mutation {
    createUser(input: CreateUserInput): CreateUserResponse
  },

`);
var root = {
    login: loginQL_1.login,
    createUser: userQL_1.createUser,
};
exports.default = { schema, root };
