'use strict';

module.exports = ((sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    text: DataTypes.TEXT,
    action: DataTypes.TEXT,
    attachment: DataTypes.TEXT
  });
  return Item;
});