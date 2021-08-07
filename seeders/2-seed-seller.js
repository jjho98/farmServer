'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return  queryInterface.bulkInsert('Seller', [
      {
        email: 'holo@gmail.com',
        password: '$2b$12$TW1v8R/qRMgvrOdmObfwwOtrgAKNbhF/HjI8mzkcXmqXzA94BL4Hu',
        nickname: 'holo',
        id: 1,
      },
      {
        email: 'holo2@gmail.com',
        password: '1234',
        nickname: 'yama',
        id: 2,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Seller', null, {})
  }
};
