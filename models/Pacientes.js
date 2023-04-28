'use strict';
module.exports = (Sequelize, DataTypes) => {
  const Pacientes = Sequelize.define('Pacientes',{
    id : {
      type          : DataTypes.INTEGER,
      primaryKey    : true,
      autoIncrement : true,
      allowNull     : false
    },
    name : {
      type          : DataTypes.STRING,
      allowNull     : false
    },
    cpf : {
      type          : DataTypes.INTEGER,
      allowNull     : false,
    },
    data_nascimento : {
      type          : DataTypes.DATE,
      allowNull     : false,
      defaultValue  : DataTypes.NOW
    },
    sexo : {
      type          : DataTypes.CHAR,
      allowNull     : false,
      defaultValue  : 'M',
    },
    peso : {
      type          : DataTypes.INTEGER,
      allowNull     : false,
      defaultValue  : 0
    },
    patologia : {
      type          : DataTypes.CHAR,
      allowNull     : false,
      defaultValue  : "A"
    },  
    sus : { 
      type          : DataTypes.INTEGER,
      allowNull     : false,
      defaultValue  : 0
    },
    fone : {
      type          : DataTypes.INTEGER,
      allowNull     : false,
      defaultValue  : 0
    }
  });
  Pacientes.associate = (models) => {
    Pacientes.hasMany(models.Sessoes, {
      foreignKey : 'paciente_id', as : 'sessoes_do_paciente'
    });
  };

  return Pacientes;
}