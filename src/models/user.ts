import { DataTypes, Sequelize } from 'sequelize';
import User from '../@types/models/user';

export default (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM('user', 'admin'),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      unique: true,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING(128),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  }, {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'update_at',
    modelName: 'User',
    tableName: 'User',
  })

  return User;
}