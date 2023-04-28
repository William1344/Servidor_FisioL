'use-strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('fisioterapeutas', [
      {
        name              : 'Fisioterapeuta 1',
        cpf               : "123456789",
        data_nascimento   : '1990-01-01',
        sexo              : 'M',
        crefito           : "123456",
        fone              : "123456789",
      },{
        name              : 'Fisioterapeuta 2',
        cpf               : "987654321",
        data_nascimento   : '1990-01-01',
        sexo              : 'F',
        crefito           : "123456",
        fone              : "123456789",
      },{
        name              : 'Fisioterapeuta 3',
        cpf               : "123456729",
        data_nascimento   : '1990-01-01',
        sexo              : 'M',
        crefito           : "123456",
        fone              : "123456789",

      }
    ]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('fisioterapeutas', null, {});
  }
};