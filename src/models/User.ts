import { Sequelize, DataTypes } from 'sequelize';
import { uriPostgreSQL } from '../config';

const sequelize = new Sequelize(uriPostgreSQL);

const User = {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

export const UserModel = sequelize.define('users', User);