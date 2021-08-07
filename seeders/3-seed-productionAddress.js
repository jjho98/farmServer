'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductionAddress', [{
      jibunAddr: '강원도 저기 시골',
      roadAddr: '강원도 도로명',
      Seller_id: 1,
      id: 1,
    }, {
      jibunAddr: '충청도 저기 시골',
      roadAddr: '충청도 도로명',
      Seller_id: 1,
      id: 2,
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product', null, {});
  }
};
