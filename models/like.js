const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Like', {
    Product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Product',
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
    }
  }, {
    sequelize,
    tableName: 'Like',
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
          { name: "Product_id" },
          { name: "Customer_id" },
        ]
      },
      {
        name: "fk_Product_has_Customer_Customer1",
        using: "BTREE",
        fields: [
          { name: "Customer_id" },
        ]
      },
    ]
  });
};
