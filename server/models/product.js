'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_name: DataTypes.STRING,
    product_qty: DataTypes.INTEGER,
    product_type: DataTypes.STRING,
    product_image: DataTypes.STRING,
    product_description: DataTypes.STRING,
    user_description: DataTypes.STRING,
    lisitng_expiration: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.User, {as: 'User', foreignKey: 'user_id'})
    Product.hasOne(models.Deal, {as: 'Deal', foreignKey: 'product_id'})
  };
  return Product;
};