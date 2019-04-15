'use strict';
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.TEXT,
    password: DataTypes.TEXT
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  User.prototype.setPassword = function (password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(8));
  }
  User.prototype.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
  }
  return User;
};