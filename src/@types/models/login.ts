import { Model } from 'sequelize';

export default class Login extends Model {
  id: string;
  user: string;
  password: string;
  token: string;
}