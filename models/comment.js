const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comment', {
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
    }
  }, {
    sequelize,
    tableName: 'Comment',
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
        ]
      },
      {
        name: "fk_Comment_Review1",
        using: "BTREE",
        fields: [
          { name: "Review_id" },
        ]
      },
    ]
  });
};
