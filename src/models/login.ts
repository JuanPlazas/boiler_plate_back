import { DataTypes, Sequelize } from 'sequelize';
import Login from '../@types/models/login';

export default (sequelize: Sequelize) => {
  Login.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    user: {
      type: DataTypes.STRING(128),
      unique: true,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  }, {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'update_at',
    modelName: 'login',
    tableName: 'login',
  })

  return Login;
}