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
    geometry: {
      type: DataTypes.GEOMETRY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProductionAddress',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
