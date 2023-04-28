const { Pacientes } = require('../models');

const PacienteControllers = {
    async create(req, res){
        try {
            const { name, cpf, data_nascimento, sexo, peso, patologia, sus, fone} = req.body;
            const paciente = await Pacientes.create(req.body);
            if (paciente)  return res.status(201).send({msg  : "Paciente cadastrado com sucesso", paciente});
            else           return res.status(400).send({msg : "Erro ao cadastrar paciente"});
        } catch (e) {
            return res.status(500).send({ error: e.message });
        }
    }
};

module.exports = PacienteControllers;