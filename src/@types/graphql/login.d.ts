
declare type Login = (
  args: ILoginInput
) => Promise<ILoginResponse | string | Error>

declare interface ILoginResponse {
  user: string,
  token: string,
}

declare interface ILoginInput {
  input: {
    user: string,
    password: string,
  }
}