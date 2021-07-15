const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CartItem', {
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
    }
  }, {
    sequelize,
    tableName: 'CartItem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Customer_id" },
          { name: "Option_id" },
          { name: "Option_Product_id" },
        ]
      },
      {
        name: "fk_Customer_has_Option_Option1",
        using: "BTREE",
        fields: [
          { name: "Option_id" },
          { name: "Option_Product_id" },
        ]
      },
    ]
  });
};
