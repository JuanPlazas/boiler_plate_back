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

export default loginTypes;