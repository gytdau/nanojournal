'use strict';

module.exports = ((sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    text: DataTypes.TEXT,
    action: DataTypes.TEXT,
    attachment: DataTypes.TEXT
  });
  Entry.associate = function (models) {
    Point.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Entry;
});