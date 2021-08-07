'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Product', [
      {
        displayPrice: 1000,
        name: '지금 막 수확한 감자',
        summary: '올 여름 막 수확했습니다',
        description: '바로 수확해서 보내 드립니다',
        thumbnail: '1626962957371potato.jpg',
        averageRate: 4.0,
        category: 'vegetable',
        ProductionAddress_id: 1,
        Seller_id: 1,
        hasOneOption: 1,
        orderCount: 30,
        canDirect: 0,
        id: 1,
      }, {
        displayPrice: 500,
        name: '핫한 햇양파',
        summary: '핫해 핫해 직거레 가능',
        description: '태양을 머금은 달디달은 양파',
        thumbnail: '1626959196198bat.png',
        averageRate: 2.7,
        category: 'vegetable',
        ProductionAddress_id: 1,
        Seller_id: 1,
        hasOneOption: 0,
        orderCount: 100,
        canDirect: 1,
        id: 2,
      },
      {
        displayPrice: 3000,
        name: '싱싱한 오이',
        summary: '갈증 문제 깔끔하게 해결',
        description: '오이 하면 무엇? 수분. 어디에 내놔도 꿇리지 않는 이 상당한 수분',
        thumbnail: '1627020053001cucumber.jpg',
        averageRate: 5.0,
        category: 'vegetable',
        ProductionAddress_id: 1,
        Seller_id: 2,
        hasOneOption: 0,
        orderCount: 50,
        canDirect: 0,
        id: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product', null, {});
  }
};