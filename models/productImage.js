const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductImage', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img: {
      type: DataTypes.STRING(45),
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
    }
  }, {
    sequelize,
    tableName: 'ProductImage',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "Product_id" },
        ]
      },
      {
        name: "fk_ProductImage_Product1",
        using: "BTREE",
        fields: [
          { name: "Product_id" },
        ]
      },
    ]
  });
};
