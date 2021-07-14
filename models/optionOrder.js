const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('optionOrder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    Option_Product_Seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
          { name: "Option_id" },
          { name: "Option_Product_id" },
          { name: "Option_Product_Seller_id" },
        ]
      },
      {
        name: "fk_OrderDetail_Option1",
        using: "BTREE",
        fields: [
          { name: "Option_id" },
          { name: "Option_Product_id" },
        ]
      },
    ]
  });
};
