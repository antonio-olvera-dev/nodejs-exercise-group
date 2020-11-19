'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'products',
      'providerId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'providers',
          key: 'id'       // con que campo conecta
        },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColum(
      'products',
      'providerId'
    );
  }
};
