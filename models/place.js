const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('place', {
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
    geometry: {
      type: DataTypes.GEOMETRY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Place',
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
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
