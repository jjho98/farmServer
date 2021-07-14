const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productionAddress', {
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
    }
  }, {
    sequelize,
    tableName: 'ProductionAddress',
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
          { name: "Place_id" },
        ]
      },
      {
        name: "fk_ProductionPlace_Place1",
        using: "BTREE",
        fields: [
          { name: "Place_id" },
        ]
      },
    ]
  });
};
