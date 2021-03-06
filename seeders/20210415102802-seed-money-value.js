module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('money_values',
      [
        {
          treasure_id: '100',
          amount: '15',
        },
        {
          treasure_id: '101',
          amount: '10',
        },
        {
          treasure_id: '102',
          amount: '15',
        },
        {
          treasure_id: '103',
          amount: '15',
        },
        {
          treasure_id: '104',
          amount: '10',
        },
        {
          treasure_id: '105',
          amount: '15',
        },
        {
          treasure_id: '106',
          amount: '15',
        },
        {
          treasure_id: '107',
          amount: '10',
        },
        {
          treasure_id: '108',
          amount: '15',
        },
        {
          treasure_id: '109',
          amount: '15',
        },
        {
          treasure_id: '110',
          amount: '10',
        },
        {
          treasure_id: '111',
          amount: '15',
        },
        {
          treasure_id: '112',
          amount: '15',
        },
        {
          treasure_id: '113',
          amount: '10',
        },
        {
          treasure_id: '114',
          amount: '15',
        },
        {
          treasure_id: '115',
          amount: '15',
        },
        {
          treasure_id: '116',
          amount: '10',
        },
        {
          treasure_id: '117',
          amount: '15',
        },
        {
          treasure_id: '100',
          amount: '20',
        },
        {
          treasure_id: '101',
          amount: '25',
        },
        {
          treasure_id: '102',
          amount: '20',
        },
        {
          treasure_id: '103',
          amount: '25',
        },
        {
          treasure_id: '107',
          amount: '30',
        },
        {
          treasure_id: '108',
          amount: '30',
        },
        {
          treasure_id: '109',
          amount: '30',
        },
      ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('money_values', null, {});
  },
};
