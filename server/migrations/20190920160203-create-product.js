'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING
      },
      product_qty: {
        type: Sequelize.INTEGER
      },
      product_type: {
        type: Sequelize.STRING
      },
      product_image: {
        type: Sequelize.STRING
      },
      product_description: {
        type: Sequelize.STRING
      },
      user_description: {
        type: Sequelize.STRING
      },
      lisitng_expiration: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};