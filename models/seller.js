module.exports = function(sequelize, DataTypes) {
  let seller =  sequelize.define('Seller', {
    
  }, {
    sequelize,
    paranoid: true,
  })

  seller.associate = function(db) {
    seller.belongsTo(db.User)
    seller.hasMany(db.Product, { 
      foreignKey: 'sellerId', 
      as: 'sellingProducts' ,
    })
    seller.hasMany(db.FieldAddress)
  }

  return seller
}