'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Option', [
      {
        name: '감자 10개',
        price: 1000,
        Product_id: 1 
      },
      {
        name: '1망',
        price: 3000,
        Product_id: 2,
      },
      {
        name: '1개',
        price: 500,
        Product_id: 2
      },
      {
        name: '5개',
        price: 3000,
        Product_id: 3
      },
      {
        name: '10개',
        price: 5000,
        Product_id: 3
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Option', null, {});
  }
};
