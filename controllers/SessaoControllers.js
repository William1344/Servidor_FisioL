const fs    = require('fs');
const path  = require('path');

const { Sessoes } = require('../models/');
const Blob = require('node:buffer');

const SessaoControllers = {
    async create(req, res){
        try {
            const { 
                paciente_id,
                fisioterapeuta_id,
                tecnica_id,
                sensor,
                freq_respiratoria_inicial, 
                freq_cardiaca_inicial, 
                sat_oxigenio_inicial, 
                pressao_arterial_inicial, 
                grau_inicial,
                freq_respiratoria_final, 
                freq_cardiaca_final, 
                sat_oxigenio_final, 
                pressao_arterial_final, 
                grau_final,
                evolucao,
                estado_paciente,
                estado_fisio,
                vetor_vibracao,
                vibracao_media,
                tempo_total,
            } = req.body;
            // converte vetor para blob
            console.log("Chamou", req.body);
            const sessao        = await Sessoes.create(req.body);
            /*const writeStream   = fs.createWriteStream(path.resolve(__dirname, `../logs/sessao-${sessao.id}.txt`));

            writeStream.write(`Id\n`);
            writeStream.write(`${sessao.id}\n`);
            writeStream.write(`Paciente\n`);
            writeStream.write(`${paciente_id}\n`);
            writeStream.write(`Fisioterapeuta\n`);
            writeStream.write(`${fisioterapeuta_id}\n`);
            console.log(sensor);
            if(sensor === true) {
                writeStream.write(`Vetor de Vibracao \n`);
                vetor_vibracao.forEach( value => writeStream.write(`${value}\n`));
                writeStream.write(`Vibracao média \n`);
                writeStream.write(`${vibracao_media}\n`);
                writeStream.write(`Tempo total \n`);
                writeStream.write(`${tempo_total}\n`);
            } else if (sensor === false){
                writeStream.write(`Vibracao\n`);
                vibracao_pico_x.forEach( value => writeStream.write(`${value}\n`));
            }

            writeStream.end();*/

            if (sessao)  return res.status(201).send({msg  : "Sessao cadastrada com sucesso", sessao});
            else         return res.status(400).send({msg : "Erro ao cadastrar sessao"});
        } catch (e) {
            return res.status(500).send({ error: e.message });
        }
        
    }
};

module.exports = SessaoControllers;