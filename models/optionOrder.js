const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('optionOrder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Customer',
        key: 'id'
      }
    },
    Option_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Option',
        key: 'id'
      }
    },
    Option_Product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Option',
        key: 'Product_id'
      }
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "결제 대기"
    },
    TotalOrder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TotalOrder',
        key: 'id'
      }
    },
    TotalOrder_Customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TotalOrder',
        key: 'Customer_id'
      }
    }
  }, {
    sequelize,
    tableName: 'OptionOrder',
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
          { name: "Customer_id" },
          { name: "Option_id" },
          { name: "Option_Product_id" },
          { name: "TotalOrder_id" },
          { name: "TotalOrder_Customer_id" },
        ]
      },
      {
        name: "fk_Customer_has_Option_Customer2",
        using: "BTREE",
        fields: [
          { name: "Customer_id" },
        ]
      },
      {
        name: "fk_Customer_has_Option_Option2",
        using: "BTREE",
        fields: [
          { name: "Option_id" },
          { name: "Option_Product_id" },
        ]
      },
      {
        name: "fk_OptionOrder_TotalOrder1",
        using: "BTREE",
        fields: [
          { name: "TotalOrder_id" },
          { name: "TotalOrder_Customer_id" },
        ]
      },
    ]
  });
};
