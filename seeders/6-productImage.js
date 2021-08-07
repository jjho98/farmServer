'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductImage', [
      {
        img: '1626962957371potato.jpg',
        Product_id: 1
      },
      {
        img: '1626959196198bat.png',
        Product_id: 1
      },
      {
        img: '1626959196198bat.png',
        Product_id: 2
      },
      {
        img: '1626959061927vegs.jpg',
        Product_id: 2
      },
      {
        img: '1626963438629cucumber.jpg',
        Product_id: 3
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductImage', null, {});
  }
};
