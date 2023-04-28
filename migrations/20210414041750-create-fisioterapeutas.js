'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fisioterapeutas', {
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
        unique          : true,
      },
      data_nascimento: {
        type            : Sequelize.DATEONLY,
        allowNull       : true,
      },
      sexo: {
        type            : Sequelize.CHAR,
        allowNull       : true,
      },
      crefito: {
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
        defaultValue    : Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type            : Sequelize.DATE,
        allowNull       : false,
        defaultValue    : Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Fisioterapeutas');
  }
};
