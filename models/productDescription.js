const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productDescription', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    Product_Seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    top: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "text 위치"
    },
    left: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "text 위치"
    },
    fontSize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "black"
    }
  }, {
    sequelize,
    tableName: 'ProductDescription',
    timestamps: true,
    underscored: 'false',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "Product_id" },
          { name: "Product_Seller_id" },
        ]
      },
      {
        name: "fk_ProductDescription_Product1",
        using: "BTREE",
        fields: [
          { name: "Product_id" },
        ]
      },
    ]
  });
};
