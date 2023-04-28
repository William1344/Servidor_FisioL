'use-strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pacientes', [
      {
        name              : 'Paciente 1',
        cpf               : 123456789,
        data_nascimento   : '1990-01-01',
        sexo              : 'M',
        peso              : 80,
      },{
        name              : 'Paciente 2',
        cpf               : 987654321,
        data_nascimento   : '1990-01-01',
        sexo              : 'F',
        peso              : 60,
      },{
        name              : 'Paciente 3',
        cpf               : 123456789,
        data_nascimento   : '1990-01-01',
        sexo              : 'M',
        peso              : 70,
      }
    ]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pacientes', null, {});
  }
};