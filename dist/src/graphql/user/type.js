"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserTypes = `
  type CreateUserResponse {
    user: String
    password: String
  }

  input CreateUserInput {
    type: String
    name: String
    lastName: String
    email: String
    user: String
    password: String
  }
`;
exports.default = UserTypes;
