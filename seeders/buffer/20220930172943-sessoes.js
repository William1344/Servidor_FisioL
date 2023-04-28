'use-strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Sessoes', [
      {
        paciente_id         : 1,
        fisioterapeuta_id   : 1,
        tecnica_id          : 1,
        sensor              : true,
        vetor_vibracao      : new Blob([12, 21,22,15,16,16,18,18,19,20]),
        vibracao_media      : 18,
        tempo_total         : 360, 
      },{
        paciente_id         : 1,
        fisioterapeuta_id   : 1,
        tecnica_id          : 1,
        sensor              : true,
        vetor_vibracao      : new Blob([12, 21,22,15,16,16,18,18,19,20]),
        vibracao_media      : 22,
        tempo_total         : 400,
      },{
        paciente_id         : 1,
        fisioterapeuta_id   : 1,
        tecnica_id          : 1,
        sensor              : true,
        vetor_vibracao      : new Blob([12, 21,22,15,16,16,18,18,19,20]),
        vibracao_media      : 25,
        tempo_total         : 300,
      }

    ]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Sessoes', null, {});
  }
};