//const { StringStream }= require('scramjet');
const express           = require("express");
//const path            = require('path');
//const { SerialPort }  = require("serialport");
const cors              = require('cors');
const morgan            = require('morgan');
const handlebars        = require('express-handlebars');
const flash             = require('connect-flash');
const routes            = require('./routes');

//let CONEXAO = 0;

const app               = require("express")();
//const http            = require("http").Server(app); 
//const io              = require("socket.io")(http);

// afastar rotinas mais simples de varredura e ataques automatizados
app.disable('x-powered-by'); 

//Configurando o CORS
app.use(cors());

//Configurando pastas dos arquivos estáticos.
app.use(express.static(__dirname + '/public'));

//Configurando o Morgan
app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Configurando as Rotas
app.use(flash());
app.use(routes);

/**
 * mySerial - cria uma porta serial para comunicação com o Arduíno, define a velocidade de 
 * comunicação e interpreta o pular linha.
 * Onde eu estou colocando "/dev/ttyACM8" você deve substituir essa informação pela sua porta 
 * serial, onde o seu Arduíno está conectado. 
 */
    /*const mySerial = new SerialPort({
      path      : 'COM4',
 	    baudRate  : 9600
    });


    mySerial.on("open", function(){
	    console.log("Arduino conexão estabelecida!");
    });
 */

/**
  * io.on - Recebe conexão de cliente.
  */
/*io.on("connection", function(socket){
	console.log("Usuário está conectádo!");

	socket.on("comecar", () => {
		if (CONEXAO === 0){		
			mySerial.pipe(new StringStream) // pipe the stream to scramjet StringStream
			.lines('\n')                    // split per line
			.each(                          // send message per every line
			data => io.sockets.emit('dadosArduino', data)
			);
			CONEXAO = 1;
		} else if (CONEXAO === 1) {
			mySerial.resume((err) => {
				console.log('port closed', err);
			});	
		}
	});

	socket.on("parar", () => {
		mySerial.pause((err) => {
			console.log('port closed', err);
		});
	});
});*/

module.exports = app;