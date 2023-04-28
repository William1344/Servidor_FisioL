'use strict';
const fs        = require('fs');
const express   = require('express');
const routes    = express.Router();

const {
    FisioterapeutaController, RelatoriosControllers, SessaoControllers, PacienteControllers
              } = require('./controllers/');

const { Pacientes, Sessoes, Fisioterapeutas, Tecnicas } = require('./models/');

routes.get('/', (req,res) => { 

    res.send('Vai caralho');
});  

//FISIOTERAPEUTA
routes.get('/cadastro/fisioterapeuta', (req,res) => { 
    res.render('fisioterapeuta');
});

routes.post('/cadastro/fisioterapeuta', FisioterapeutaController.create);

//PACIENTE
routes.get('/cadastro/paciente', (req,res) => { 
    res.render('paciente');
});
routes.post('/cadastro/paciente', PacienteControllers.create);

//SESSAO
routes.get('/sessao', async (req,res) => { 
    const paciente          = await Pacientes.findAll();
    const fisioterapeuta    = await Fisioterapeutas.findAll();
    const tecnica           = await Tecnicas.findAll();
    res.render('sessao', { pacientes: paciente, fisioterapeutas: fisioterapeuta, tecnicas: tecnica });
});

routes.post('/sessao', SessaoControllers.create);

//ANALISE GERAL

routes.get('/selecionar/paciente/geral', async (req, res) => {
    const pc = await Pacientes.findAll();
    return res.render('analisePacienteGeral', { pacientes: pc });
});

routes.get('/selecionar/paciente/geral/:id', async (req, res) => {
    const { id } = req.params;
    const sessao = await Sessoes.findAll({
        include: [{
            association: 'fisioterapeutas',
            attributes: ['name'],
        }],
        where: {
            paciente_id: id,
        }
    });

    const paciente = await Pacientes.findAll({
        where: {
            id,
        }
    });
    return res.render('analiseGeral', { sessa: sessao, pac: paciente, sessoes: JSON.stringify(sessao), pacientes: JSON.stringify(paciente) });
});

//ANALISE SESSAO

routes.get('/selecionar/paciente', async (req, res) => {
    const pc = await Pacientes.findAll();
    return res.render('analisePaciente', { pacientes: pc });
});

routes.get('/paciente/:id', async (req,res) => { 
    const { id } = req.params;
    const sessao = await Sessoes.findAll({
        where: {
            paciente_id: id,
        }
    });
    return res.render('analise', { sessoes: sessao });
});

routes.get('/analise/:id', async (req, res) => {
    const { id } = req.params;
    let sessao = await Sessoes.findAll({where: {id}});
    // converter blob para JSON

    const data = sessao[0].vetor_vibracao.toString('utf8');
    sessao[0].vetor_vibracao = JSON.parse(data);
    console.log("Session: ", sessao[0].vetor_vibracao);
    return res.render('analiseSessao', { sessoes: sessao });
});

//Relatorio

routes.get('/relatorios', async (req, res) => {
    const pc = await Pacientes.findAll();

    return res.render('relatorios', { pacientes: pc });
});

routes.get('/relatorios/especifico/:id', async (req, res) => {
    const { id } = req.params;
    const sessao = await Sessoes.findAll({
        where: {
            paciente_id: id,
        }
    });
    return res.render('relatoriosEspecifico', { sessoes: sessao });
});

routes.get('/relatorio/html/:id', RelatoriosControllers.analiseSessao);
routes.get('/relatorio/pdf/:id', RelatoriosControllers.analiseSessaoPDF);
routes.get('/relatorio/geral/html/:id', RelatoriosControllers.analiseGeral);
routes.get('/relatorio/geral/pdf/:id', RelatoriosControllers.analiseGeralPDF);

module.exports = routes;