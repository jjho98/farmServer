'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Customer', [{
      email: 'a@gmail.com',
      password: '$2b$12$TW1v8R/qRMgvrOdmObfwwOtrgAKNbhF/HjI8mzkcXmqXzA94BL4Hu',
      nickname: '피카츄',
      id: 1,
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Customer', null, {});
  }
};
