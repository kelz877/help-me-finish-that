'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Deals', //table to add column to
      'product_buyer_id', //column title
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Users', //name of table we are getting the ref from
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Deals',
      'product_buyer_id'
    )
  }
};
