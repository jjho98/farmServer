const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RefreshToken', {
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(256),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'RefreshToken',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
    ]
  });
};
