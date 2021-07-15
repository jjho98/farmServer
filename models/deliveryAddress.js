const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeliveryAddress', {
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
    jibunAddr: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    roadAddr: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    detailAddr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    geometry: {
      type: DataTypes.GEOMETRY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'DeliveryAddress',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "Customer_id" },
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
