'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Products',
      'item_active',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Products',
      'item_active'
    )
  }
};
