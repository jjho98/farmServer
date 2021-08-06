const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductionAddress', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    Seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Seller',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ProductionAddress',
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
          { name: "Seller_id" },
        ]
      },
      {
        name: "fk_ProductionAddress_Seller1",
        using: "BTREE",
        fields: [
          { name: "Seller_id" },
        ]
      },
    ]
  });
};
