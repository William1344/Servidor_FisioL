'use strict';

module.exports = (sequelize, DataTypes) => {
  const Fisioterapeutas = sequelize.define('Fisioterapeutas',{
    id : {
      type        : DataTypes.INTEGER,
      primaryKey  : true,
      autoIncrement: true,
      allowNull   : false
    },
    name    : {
      type        : DataTypes.STRING,
      allowNull   : false,
    },
    cpf     : {
      type        : DataTypes.INTEGER,
      allowNull   : false
    },
    data_nascimento: {
      type        : DataTypes.STRING,
      allowNull   : false
    },
    sexo    : {
      type        : DataTypes.CHAR,
      allowNull   : false,
      defaultValue: 'M'
    },
    crefito : {
      type        : DataTypes.INTEGER,
      allowNull   : false
    },
    fone    : {
      type        : DataTypes.INTEGER,
      allowNull   : false
    }
  });
  Fisioterapeutas.associate = (models) => {
    Fisioterapeutas.hasMany(models.Sessoes, {
      foreignKey : 'fisioterapeuta_id', as : 'sessoes_do_fisioterapeuta'
    });
  };
  return Fisioterapeutas;
};