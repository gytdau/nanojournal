'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable("Items", "Entries")
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameTable("Entries", "Items")
  }
};
