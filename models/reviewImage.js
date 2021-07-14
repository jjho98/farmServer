const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviewImage', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "url"
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
    tableName: 'ReviewImage',
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
          { name: "Review_id" },
        ]
      },
      {
        name: "fk_ReviewImage_Review1",
        using: "BTREE",
        fields: [
          { name: "Review_id" },
        ]
      },
    ]
  });
};
