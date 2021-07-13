module.exports = function(sequelize, DataTypes) {
  const phoneValidate = /\d{3}-\d{4}-\d{4}/
  let user =  sequelize.define('User', {
    email: {
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING(13),
      allowNull: true,
      validate: {
        phoneValidator(value) {
          if (!phoneValidate.test(value)) {
            throw new Error("전화번호는 XXX-XXXX-XXXX 형식이어야 합니다")
          }
        }
      }
    },
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    provider: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'local',
    },
    snsId: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
  }, {
    sequelize,
    paranoid: true,
  })

  user.associate = function(db) {
    
  }

  return user
}