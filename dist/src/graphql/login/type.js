"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginTypes = `
  type LoginResponse {
    user: String
    token: String
  }

  input LoginInput {
    user: String
    password: String
  }
`;
exports.default = loginTypes;
