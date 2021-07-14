const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('totalOrder', {
    Customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Customer',
        key: 'id'
      }
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
    },
    DeliveryAddress_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'DeliveryAddress',
        key: 'id'
      }
    },
    DeliveryAddress_Place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'DeliveryAddress',
        key: 'Place_id'
      }
    },
    DeliveryAddress_Customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'DeliveryAddress',
        key: 'Customer_id'
      }
    },
    DeliveryAddress_Customer_Place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'DeliveryAddress',
        key: 'Customer_Place_id'
      }
    }
  }, {
    sequelize,
    tableName: 'TotalOrder',
    timestamps: false,
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
          { name: "OptionOrder_id" },
          { name: "OptionOrder_Option_id" },
          { name: "OptionOrder_Option_Product_id" },
          { name: "OptionOrder_Option_Product_Seller_id" },
          { name: "OptionOrder_Option_Product_Seller_Place_id" },
          { name: "DeliveryAddress_id" },
          { name: "DeliveryAddress_Place_id" },
          { name: "DeliveryAddress_Customer_id" },
          { name: "DeliveryAddress_Customer_Place_id" },
        ]
      },
      {
        name: "fk_Customer_has_OptionOrder_OptionOrder2",
        using: "BTREE",
        fields: [
          { name: "OptionOrder_id" },
          { name: "OptionOrder_Option_id" },
          { name: "OptionOrder_Option_Product_id" },
          { name: "OptionOrder_Option_Product_Seller_id" },
        ]
      },
      {
        name: "fk_TotalOrder_DeliveryAddress1",
        using: "BTREE",
        fields: [
          { name: "DeliveryAddress_id" },
          { name: "DeliveryAddress_Place_id" },
          { name: "DeliveryAddress_Customer_id" },
          { name: "DeliveryAddress_Customer_Place_id" },
        ]
      },
    ]
  });
};
