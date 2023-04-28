'use-strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tecnicas', [
      {
        modo       : 'Manual',
        nome       : 'Técnica 1',
      }
    ]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tecnicas', null, {});
  }
};