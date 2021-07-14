const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('deliveryAddress', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Place',
        key: 'id'
      }
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
    Customer_Place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'DeliveryAddress',
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
          { name: "id" },
          { name: "Place_id" },
          { name: "Customer_id" },
          { name: "Customer_Place_id" },
        ]
      },
      {
        name: "fk_Address_Place1",
        using: "BTREE",
        fields: [
          { name: "Place_id" },
        ]
      },
      {
        name: "fk_DeliveryAddress_Customer1",
        using: "BTREE",
        fields: [
          { name: "Customer_id" },
        ]
      },
    ]
  });
};
