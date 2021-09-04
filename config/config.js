require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "1234",
    database: "farmon",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "farmon_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "admin",
    password: "tree1379",
    database: "farmon",
    host: "farmon-db.c36wjhpqvic7.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    dialetOptions: {
      ssl: "Amazon RDS",
    },
    pool: { maxConnections: 5, maxIdleTime: 30 },
  },
};
