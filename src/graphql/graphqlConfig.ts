import { buildSchema } from 'graphql';

import {
  loginTypes,
  login,
} from './login/loginQL';

import {
  userTypes,
  createUser,
} from './user/userQL';

var schema = buildSchema(`
  ${loginTypes}
  ${userTypes}

  type Query {
    login(input: LoginInput): LoginResponse
  },

  type Mutation {
    createUser(input: CreateUserInput): CreateUserResponse
  },

`);

var root = {
  login,
  createUser,
}

export default { schema, root }