const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Question', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: false
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
    Product_ProductionAddress_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Product',
        key: 'ProductionAddress_id'
      }
    },
    Product_Seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Product',
        key: 'Seller_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Question',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "Product_id" },
          { name: "Product_ProductionAddress_id" },
          { name: "Product_Seller_id" },
        ]
      },
      {
        name: "fk_Question_Product1",
        using: "BTREE",
        fields: [
          { name: "Product_id" },
          { name: "Product_ProductionAddress_id" },
          { name: "Product_Seller_id" },
        ]
      },
    ]
  });
};
