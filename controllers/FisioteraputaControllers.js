const { Fisioterapeutas } = require('../models/');

const FisioterapeutaController = {
  async create(req, res){
    try{
      const { name, cpf, data_nascimento, sexo, crefito, fone} = req.body;
      const fisio = await Fisioterapeutas.create(req.body);
      if (fisio)  return res.status(201).send({msg  : "Fisioterapeuta cadastrado com sucesso", fisio});
      else        return res.status(400).send({msg  : "Erro ao cadastrar fisioterapeuta"});
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  }, 
};

module.exports = FisioterapeutaController;