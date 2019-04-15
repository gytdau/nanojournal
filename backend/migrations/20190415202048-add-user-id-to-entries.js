'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Entries", "userId", Sequelize.INTEGER)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Entries", "userId")
  }
};
