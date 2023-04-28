'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pacientes', {
      id: {
        type            : Sequelize.INTEGER,
        primaryKey      : true,
        autoIncrement   : true,
        allowNull       : false,
      },
      name: {
        type            : Sequelize.STRING,
        allowNull       : false,
      },
      cpf: {
        type            : Sequelize.INTEGER,
        allowNull       : true,
      },
      data_nascimento: {
        type            : Sequelize.DATEONLY,
        allowNull       : true,
      },
      sexo: {
        type            : Sequelize.CHAR,
        allowNull       : true,
      },
      peso: {
        type            : Sequelize.INTEGER,
        allowNull       : true,
      },
      patologia: {
        type            : Sequelize.CHAR,
        allowNull       : true,
      },
      sus: {
        type            : Sequelize.INTEGER,
        allowNull       : true,
      },
      fone: {
        type            : Sequelize.INTEGER,
        allowNull       : true,
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
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pacientes');
  }
};
