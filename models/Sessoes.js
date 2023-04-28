'use strict';

module.exports = (Sequelize, DataTypes) => {
  const Sessoes = Sequelize.define('Sessoes', {
    paciente_id : {
      type          : DataTypes.INTEGER,
      allowNull     : false,
      references    : {
        model   : 'Pacientes',
        key     : 'id'
      }
    },
    fisioterapeuta_id : {
      type          : DataTypes.INTEGER,
      allowNull     : false,
      references    : {
        model   : 'Fisioterapeutas',
        key     : 'id'
      }
    },
    tecnica_id : {
      type          : DataTypes.INTEGER,
      allowNull     : false,
      references    : {
        model   : 'Tecnicas',
        key     : 'id'
      }
    },
    sensor : {
      type          : DataTypes.BOOLEAN,
      allowNull     : false,
      defaultValue  : false
    },
    freq_respiratoria_inicial : {
      type          : DataTypes.FLOAT,
      allowNull     : false,
      defaultValue  : 0
    },
    freq_cardiaca_inicial : {
      type          : DataTypes.FLOAT,
      allowNull     : false,
      defaultValue  : 0
    },
    sat_oxigenio_inicial : {
      type          : DataTypes.FLOAT,
      allowNull     : false,
      defaultValue  : 0
    },
    pressao_arterial_inicial : {
      type          : DataTypes.FLOAT,
      allowNull     : false,
      defaultValue  : 0
    },
    grau_inicial : {
      type          : DataTypes.INTEGER,
      allowNull     : false,
      defaultValue  : 0
    },
    freq_respiratoria_final : {
      type          : DataTypes.FLOAT,
      allowNull     : false,
      defaultValue  : 0
    },
    freq_cardiaca_final : {
      type          : DataTypes.FLOAT,
      allowNull     : false,
      defaultValue  : 0
    },
    sat_oxigenio_final : {
      type          : DataTypes.FLOAT,
      allowNull     : false,
      defaultValue  : 0
    },
    pressao_arterial_final : {
      type          : DataTypes.FLOAT,
      allowNull     : false,
      defaultValue  : 0
    },
    grau_final : {
      type          : DataTypes.INTEGER,
      allowNull     : false,
      defaultValue  : 0
    },
    evolucao : {
      type          : DataTypes.STRING,
      allowNull     : false,
      defaultValue  : ''
    },
    estado_paciente : {
      type          : DataTypes.INTEGER,
      allowNull     : false,
      defaultValue  : 0
    },
    estado_fisio : {
      type          : DataTypes.INTEGER,
      allowNull     : false,
      defaultValue  : 0
    },
    vetor_vibracao : {
      type          : DataTypes.BLOB('long'),
      allowNull     : false,
      defaultValue  : ''
    },
    vibracao_media : {
      type          : DataTypes.FLOAT,
      allowNull     : false,
      defaultValue  : 0
    },
    tempo_total : {
      type          : DataTypes.INTEGER,
      allowNull     : false,
      defaultValue  : 0
    },
    createdAt : {
      type          : DataTypes.DATE,
      allowNull     : false,
      defaultValue  : Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt : {
      type          : DataTypes.DATE,
      allowNull     : false,
      defaultValue  : Sequelize.literal('CURRENT_TIMESTAMP')
    }
  });
  Sessoes.associate = function(models) {
    Sessoes.belongsTo(models.Pacientes, {
      foreignKey : 'paciente_id', as : 'paciente'
    });
    Sessoes.belongsTo(models.Fisioterapeutas, {
      foreignKey : 'fisioterapeuta_id', as : 'fisioterapeuta'
    });
    Sessoes.belongsTo(models.Tecnicas, {
      foreignKey : 'tecnica_id', as : 'tecnica'
    });
  };
  return Sessoes;
}