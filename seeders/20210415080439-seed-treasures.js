module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('treasures', [
      {
        id: '100',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.33125924 103.8980486)', 4326),
        name: 'T1',
      },
      {
        id: '101',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.32255754 103.8943086)', 4326),
        name: 'T2',
      },
      {
        id: '102',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.3166356 103.8891225)', 4326),
        name: 'T3',
      },
      {
        id: '103',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.31286055 103.8545565)', 4326),
        name: 'T4',
      },
      {
        id: '104',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.34439896 103.8765938)', 4326),
        name: 'T5',
      },
      {
        id: '105',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.33616189 103.8770866)', 4326),
        name: 'T6',
      },
      {
        id: '106',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.32552844 103.8691014)', 4326),
        name: 'T7',
      },
      {
        id: '107',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.32303589 103.8774815)', 4326),
        name: 'T8',
      },
      {
        id: '108',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.33465304 103.870449)', 4326),
        name: 'T9',
      },
      {
        id: '109',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.32606138 103.8793007)', 4326),
        name: 'T10',
      },
      {
        id: '110',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.25886946 103.898879)', 4326),
        name: 'T11',
      },
      {
        id: '111',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.26973345 103.8810448)', 4326),
        name: 'T12',
      },
      {
        id: '112',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.32914713 103.8334781)', 4326),
        name: 'T13',
      },
      {
        id: '113',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.32960595 103.8807937)', 4326),
        name: 'T14',
      },
      {
        id: '114',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.33700251 103.8492249)', 4326),
        name: 'T15',
      },
      {
        id: '115',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.27845714 103.8571762)', 4326),
        name: 'T16',
      },
      {
        id: '116',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.36019784 103.8563582)', 4326),
        name: 'T17',
      },
      {
        id: '117',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(1.31551921 103.8632839)', 4326),
        name: 'T18',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('treasures', null, {});
  },
};
