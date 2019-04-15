'use strict';

module.exports = ((sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    text: DataTypes.TEXT,
    action: DataTypes.TEXT,
    attachment: DataTypes.TEXT
  });
  Entry.associate = function (models) {
    Entry.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Entry;
});