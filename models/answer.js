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
    }
  }, {
    sequelize,
    tableName: 'Answer',
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
          { name: "Question_id" },
        ]
      },
      {
        name: "fk_Answer_Question1",
        using: "BTREE",
        fields: [
          { name: "Question_id" },
        ]
      },
    ]
  });
};
