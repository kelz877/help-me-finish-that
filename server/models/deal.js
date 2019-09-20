'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deal = sequelize.define('Deal', {
    message: DataTypes.TEXT
  }, {});
  Deal.associate = function(models) {
    // associations can be defined here
    Deal.belongsTo(models.User, {as: 'Product_Owner', foreignKey: 'product_owner_id'})
    Deal.belongsTo(models.User, {as: 'Product_Buyer', foreignKey: 'product_buyer_id'})
    Deal.belongsTo(models.Product, {as: 'Product', foreignKey: 'product_id' })
  };
  return Deal;
};