'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Deals',
      'product_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Products',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Deals',
      'product_id'
    )
  }
};
