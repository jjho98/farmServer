const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Answer', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Question',
        key: 'id'
      }
    },
    Question_Product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Question',
        key: 'Product_id'
      }
    },
    Question_Product_ProductionAddress_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Question',
        key: 'Product_ProductionAddress_id'
      }
    },
    Question_Product_Seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Question',
        key: 'Product_Seller_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Answer',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "Question_id" },
          { name: "Question_Product_id" },
          { name: "Question_Product_ProductionAddress_id" },
          { name: "Question_Product_Seller_id" },
        ]
      },
      {
        name: "fk_Answer_Question1",
        using: "BTREE",
        fields: [
          { name: "Question_id" },
          { name: "Question_Product_id" },
          { name: "Question_Product_ProductionAddress_id" },
          { name: "Question_Product_Seller_id" },
        ]
      },
    ]
  });
};
