const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart', {
    Customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Customer',
        key: 'id'
      }
    },
    Customer_Place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OptionOrder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'OptionOrder',
        key: 'id'
      }
    },
    OptionOrder_Option_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'OptionOrder',
        key: 'Option_id'
      }
    },
    OptionOrder_Option_Product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'OptionOrder',
        key: 'Option_Product_id'
      }
    },
    OptionOrder_Option_Product_Seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'OptionOrder',
        key: 'Option_Product_Seller_id'
      }
    },
    OptionOrder_Option_Product_Seller_Place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'Cart',
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
          { name: "Customer_id" },
          { name: "Customer_Place_id" },
          { name: "OptionOrder_id" },
          { name: "OptionOrder_Option_id" },
          { name: "OptionOrder_Option_Product_id" },
          { name: "OptionOrder_Option_Product_Seller_id" },
          { name: "OptionOrder_Option_Product_Seller_Place_id" },
        ]
      },
      {
        name: "fk_Customer_has_OptionOrder_OptionOrder1",
        using: "BTREE",
        fields: [
          { name: "OptionOrder_id" },
          { name: "OptionOrder_Option_id" },
          { name: "OptionOrder_Option_Product_id" },
          { name: "OptionOrder_Option_Product_Seller_id" },
        ]
      },
    ]
  });
};
