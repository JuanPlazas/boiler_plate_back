import { Model } from 'sequelize';

export default class User extends Model {
  id?: string;
  type?: 'user' | 'admin';
  name?: string;
  lastName?: string;
  email?: string;
  user?: string;
  password?: string;
}
