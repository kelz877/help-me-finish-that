'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Deals', //table to add column to
      'product_owner_id', //column name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Users', //name of table you are getting the column data from
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Deals',
      'product_owner_id'
    )
  }
};
