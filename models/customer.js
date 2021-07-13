module.exports = function(sequelize, DataTypes) {
  let customer =  sequelize.define('Customer', {
    
  }, {
    sequelize,
    paranoid: true,
  })

  customer.associate = function(db) {
    customer.belongsTo(db.User)
    customer.belongsToMany(db.Product, {
      foreignKey: 'likingUserId',
      as: 'likingProducts',
      through: 'Like',
    })
    customer.belongsToMany(db.Product, {
      foreignKey: 'cartOwnerId',
      as: 'cartProducts',
      through: 'Cart',
    })
    customer.belongsToMany(db.Product, {
      foreignKey: 'buyerId',
      as: 'boughtProducts',
      through: 'Buy',
    })
    customer.belongsToMany(db.DeliveryAddress, {
      through: 'Address',
    })
  }

  return customer
}