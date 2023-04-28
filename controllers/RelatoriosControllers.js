const fs            = require('fs');
const path          = require('path');
const { 
  format, endOfDay, subDays 
}                   = require('date-fns');
const { 
  Sessoes, Pacientes 
}                   = require('../models/');
const html_to_pdf   = require('html-pdf-node');
const moment        = require('moment');

const RelatoriosControllers = {
  async analiseSessao(req, res){
    try{
      const { id }    = req.params;
      const sessao    = await Sessoes.findAll({ where: {id} });
      const diaAtual  = format(endOfDay(new Date()), 'dd/MM/yyyy');
      return res.render('relatorios/relatorioSessao', { layout: 'relatorios', sessoes: sessao, data: diaAtual });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  },
  async analiseSessaoPDF(req, res){
    try {
      const { id }    = req.params;
      const options   = { format: 'A4' };
      const file      = { url: `http://localhost:3005/relatorio/html/${id}` };
      const buffer    = html_to_pdf.generatePdf(file, options);

      moment.locale('pt-br');
      const milis     = moment().valueOf();
      const data      = moment().format('DDMMYYYY');
      fs.writeFileSync(`relatorio-espec-${id}-${data}${milis}.pdf`, buffer ,'binary');

      const pdfPath = path.join(__dirname + '/..' + `/relatorio-espec-${id}-${data}${milis}.pdf`);
      res.sendFile(`${pdfPath}`);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async analiseGeral(req, res){
    try {
      const { id }  = req.params;
      const sessao  = await Sessoes.findAll({
        where: {
          paciente_id : id
        },
        include: [{
          association : 'fisioterapeuta',
          attributes  : ['name'],
        }],
      });
      const paciente = await Pacientes.findByPk(id);
      const diaAtual = format(endOfDay(new Date()), 'dd/MM/yyyy');
      return res.render('relatorios/relatorioGeral', { layout: 'relatorios', sessa: sessao, pac: paciente, sessoes: JSON.stringify(sessao), pacientes: JSON.stringify(paciente), data: diaAtual });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  },
  async analiseGeralPDF(req, res){
    const { id }    = req.params;
    const options   = { format: 'A4' };
    const file      = { url: `http://localhost:3005/relatorio/html/geral/${id}` };
    const buffer    = html_to_pdf.generatePdf(file, options);

    moment.locale('pt-br');
    const millis     = moment().valueOf();
    const data      = moment().format('DDMMYYYY');
    fs.writeFileSync(`relatorio-geral-${id}-${data}${millis}.pdf`, buffer ,'binary');

    const pdfPath = path.join(__dirname + '/..' + `/relatorio-geral-${id}-${data}${millis}.pdf`);
    res.sendFile(`${pdfPath}`);
  }
};

module.exports = RelatoriosControllers;