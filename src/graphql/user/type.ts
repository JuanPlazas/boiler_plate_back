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

export default UserTypes;