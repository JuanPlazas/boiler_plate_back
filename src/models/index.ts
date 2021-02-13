import { Op, Sequelize } from 'sequelize';
import config from '../../config';

import Login from './login';
import User from './user';

const sequelize = new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD, {
  dialect: 'mysql',
  host: config.DB_HOST,
  logging: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  port: config.DB_PORT,
});

const db = {
  sequelize,
  Sequelize,
  Op,
  Login: Login(sequelize),
  User: User(sequelize),
}

export default db;