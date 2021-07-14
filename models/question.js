const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Review',
        key: 'id'
      }
    },
    Review_Product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Review',
        key: 'Product_id'
      }
    },
    Review_Product_Seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Review',
        key: 'Product_Seller_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Question',
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
          { name: "Review_id" },
          { name: "Review_Product_id" },
          { name: "Review_Product_Seller_id" },
        ]
      },
      {
        name: "fk_Question_Review1",
        using: "BTREE",
        fields: [
          { name: "Review_id" },
          { name: "Review_Product_id" },
          { name: "Review_Product_Seller_id" },
        ]
      },
    ]
  });
};
