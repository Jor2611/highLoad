const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class User extends Model {}

User.init({
    balance: DataTypes.INTEGER,
    version: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: 'user',
    version: true
});

module.exports = User;
