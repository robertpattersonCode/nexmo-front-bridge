
const Nexmo = require('nexmo'); //nexmo node lib
const express = require('express'); 
const bodyParser = require('body-parser'); //body parser to parse the incoming http request
const app = express();
var http = require('http');
const port = process.env.PORT || 5000;

var request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const nexmo = new Nexmo({
	apiKey: 'YOUR-KEY',
	apiSecret: 'YOUR-SECRET'
});

var frm = '';
app.post('/', (req, res) => {
	res.return('NINJA ACTION!');
	res.status(200).end();
});
app.get('/ping', (req, res) => {
	res.status(200).end();
	console.log('*********  pinged!   ***********');
	console.log('Front to Nexmo -->  ready ');
});
app.post('/ping', (req, res) => {
	res.status(200).end();
	console.log('*********  pinged!   ***********');
	console.log('Front to Nexmo -->  ready ');
});

app.get('/', (req, res) => {
	res.return('NINJA ACTION!');
	res.status(200).end();
});
//// COPY AND PASTE AS MANY ROUTES FOR #S AS YOU NEED!!


//////////////////////////////////////////////  12135551212   <-- REPLACE WITH YOUR NEXMO SMS #
app.post('/12135551212', (req, res) => {
	frm = '12135551212';
	hx(req.body, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12135551212   <-- REPLACE WITH YOUR NEXMO SMS #
app.post('/12135551212', (req, res) => {
	frm = '12135551212';
	hx(req.body, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12135551212   <-- REPLACE WITH YOUR NEXMO SMS #
app.post('/12135551212', (req, res) => {
	frm = '12135551212';
	hx(req.body, res);
	res.status(200).end();
});


//////////////////////////////////////////////  12135551212   <-- REPLACE WITH YOUR NEXMO SMS #
app.post('/12135551212', (req, res) => {
	frm = '12135551212';
	hx(req.body, res);
	res.status(200).end();
});


//////////////////////////////////////////////  12135551212   <-- REPLACE WITH YOUR NEXMO SMS #
app.post('/12135551212', (req, res) => {
	frm = '12135551212';
	hx(req.body, res);
	res.status(200).end();
});



////////////////////////////////////////////////////////////////////////////////

function hx(params, res) {
	console.log('()() ' + frm + ' ()()');
	let incomingData = {
		from: params.text,
		to: params.recipients
	};
	x = params.recipients[1];
	x2 = params.recipients[0].handle;

	fm = x.handle;
	let txts = incomingData.from;
	function remove_first_character(element) {
		return element.slice(1);
	}
	//// SOMETIMES FRONT LIKE TO PUT A + EVEN WHEN YOU TELL IT NOT TOO.. THIS TAKES CARE OF THAT.. 
	var res = fm.charAt(0);
	if (res == '+') {
		console.log('{}{}{}{}{}  found a + {}{}{}}{}{}{}');

		fm = remove_first_character(fm);
	}

	/////////////////////////// CONVERT INCOMING FRONT MESSAGE, SLICE AND DICE IT AND REPACKAGE IT FOR NEXMO API

	const from = frm;
	const to = fm;
	const text = txts;
	const opts = {
		type: 'unicode'
	};

	nexmo.message.sendSms(from, to, text, opts, (err, responseData) => {
		if (err) {
			console.log(err);
		} else {
			if (responseData.messages[0]['status'] === '0') {
				console.log('\n\n\n*******************');
				console.log(' from: ' + from);
				console.log('\tto : ' + fm);
				console.log('\tmsg: ' + text);
				console.log('*******************  Message sent successfully.\n\n\n');
			} else {
				console.log(
					`Message failed with error: ${responseData.messages[0]['error-text']}`
				);
			}
		}
	});

	console.log('Front to Nexmo -->  ready ');
	frm = '';
}

module.exports = app;

const server = app.listen(port, () => {
	console.log('********************************************************');
	console.log('********************************************************');
	console.log('Front ------>  to Nexmo -->  ');
	console.log('********************************************************');
	console.log('********************************************************');
});
