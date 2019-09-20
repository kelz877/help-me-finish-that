'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    full_name: DataTypes.STRING,
    email_address: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    last_login: DataTypes.DATE,
    user_image: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Product,{as : 'Product', foreignKey: 'user_id'})
    User.hasMany(models.Deal,{as : 'Product_Owner', foreignKey: 'product_owner_id'})
    User.hasMany(models.Deal,{as : 'Product_Buyer', foreignKey: 'product_buyer_id'})
  };
  return User;
};