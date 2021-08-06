const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TotalOrder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    totalPay: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    DeliveryAddress_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'DeliveryAddress',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'TotalOrder',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "Customer_id" },
          { name: "DeliveryAddress_id" },
        ]
      },
      {
        name: "fk_TotalOrder_Customer1",
        using: "BTREE",
        fields: [
          { name: "Customer_id" },
        ]
      },
      {
        name: "fk_TotalOrder_DeliveryAddress1",
        using: "BTREE",
        fields: [
          { name: "DeliveryAddress_id" },
        ]
      },
    ]
  });
};
