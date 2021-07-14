const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seller', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    passowrd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "nickname_UNIQUE"
    },
    provider: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "local"
    },
    snsId: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    introduce: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    profile: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Seller',
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
        name: "nickname_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nickname" },
        ]
      },
    ]
  });
};
