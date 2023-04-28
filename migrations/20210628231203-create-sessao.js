'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sessoes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "pacientes", key: "id" },
      },
      fisioterapeuta_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "fisioterapeutas", key: "id" },
      },
      tecnica_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "tecnicas", key: "id" },
      },
      sensor: {
        type            : Sequelize.BOOLEAN, // true -> acelerometro, false -> vibracao
        allowNull       : false,
        defaultValue    : true,
      },
      freq_respiratoria_inicial: {
        type            : Sequelize.FLOAT,
        allowNull       : true,
        defaultValue    : 0,
      },
      freq_cardiaca_inicial: {
        type            : Sequelize.FLOAT,
        allowNull       : true,
        defaultValue    : 0,
      },
      sat_oxigenio_inicial: {
        type            : Sequelize.FLOAT,
        allowNull       : true,
        defaultValue    : 0,
      },
      pressao_arterial_inicial: {
        type            : Sequelize.FLOAT,
        allowNull       : true,
        defaultValue    : 0,
      },
      grau_inicial: {
        type            : Sequelize.INTEGER,
        allowNull       : true,
        defaultValue    : 0,
      },
      freq_respiratoria_final: {
        type            : Sequelize.FLOAT,
        allowNull       : true,
        defaultValue    : 0,
      },
      freq_cardiaca_final: {
        type            : Sequelize.FLOAT,
        allowNull       : true,
        defaultValue    : 0,
      },
      sat_oxigenio_final: {
        type            : Sequelize.FLOAT,
        allowNull       : true,
        defaultValue    : 0,
      },
      pressao_arterial_final: {
        type            : Sequelize.FLOAT,
        allowNull       : true,
        defaultValue    : 0,
      },
      grau_final: {
        type            : Sequelize.INTEGER,
        allowNull       : true,
        defaultValue    : 0,
      },
      evolucao: {
        type            : Sequelize.STRING,
        allowNull       : true,
        defaultValue    : "",
      },
      estado_paciente: {
        type            : Sequelize.INTEGER,
        allowNull       : true,
        defaultValue    : 0,
      },
      estado_fisio: {
        type            : Sequelize.INTEGER,
        allowNull       : true,
        defaultValue    : 0,
      },
      vetor_vibracao: {
        type            : Sequelize.BLOB('long'),
        allowNull       : true,
        defaultValue    : null,
      },
      vibracao_media: {
        type            : Sequelize.FLOAT,
        allowNull       : true,
        defaultValue    : 0,
      },
      tempo_total : {
        type            : Sequelize.INTEGER,
        allowNull       : true,
        defaultValue    : 0,
      },
      createdAt: {
        type            : Sequelize.DATE,
        allowNull       : false,
        defaultValue    : Sequelize.NOW,
      },
      updatedAt: {
        type            : Sequelize.DATE,
        allowNull       : false,
        defaultValue    : Sequelize.NOW,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sessoes');
  }
};
