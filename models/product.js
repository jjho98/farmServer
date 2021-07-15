const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    display_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    average_rate: {
      type: DataTypes.DECIMAL(2,1),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: "대표 이미지"
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ProductionAddress_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ProductionAddress',
        key: 'id'
      }
    },
    Seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Seller',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Product',
    timestamps: true,
    paranoid: true,
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
          { name: "ProductionAddress_id" },
          { name: "Seller_id" },
        ]
      },
      {
        name: "fk_Product_ProductionAddress1",
        using: "BTREE",
        fields: [
          { name: "ProductionAddress_id" },
        ]
      },
      {
        name: "fk_Product_Seller1",
        using: "BTREE",
        fields: [
          { name: "Seller_id" },
        ]
      },
    ]
  });
};
