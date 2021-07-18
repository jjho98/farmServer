const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "email_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "nickname_UNIQUE"
    },
    provider: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    snsId: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    profile: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "customer"
    }
  }, {
    sequelize,
    tableName: 'User',
    timestamps: true,
    paranoid: true,
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
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
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
