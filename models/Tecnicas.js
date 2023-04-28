'use strict';
module.exports = (Sequelize, DataTypes) => {
    const Tecnicas = Sequelize.define('Tecnicas',{
        nome: {
            type        : DataTypes.STRING,
            allowNull   : false,
        },
        modo: {
            type        : DataTypes.STRING,
            allowNull   : false,
        }
    });
    Tecnicas.associate = (models) => {
        Tecnicas.hasMany(models.Sessoes, {
            foreignKey : 'tecnica_id',     as : 'tecnicas_sessoes'
        });
    }
    return Tecnicas;
};