'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Products', // <-- table you are adding column
      'user_id', //name of coumn you are adding
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', //name of table you are getting the column data from
          key: 'id'
        }
      }
    )


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Products',
      'user_id'
    )
  }
};
