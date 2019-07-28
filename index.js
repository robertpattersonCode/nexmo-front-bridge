////// https://front777.herokuapp.com/

const Nexmo = require('nexmo'); //nexmo node lib
const express = require('express'); //expr
const bodyParser = require('body-parser'); //body parser to parse the incoming http request
const app = express();
var http = require('http');
const handleParams = require('./handle');
const port = process.env.PORT || 5000;

var request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const nexmo = new Nexmo({
	apiKey: '84ed6852',
	apiSecret: 'JibCuseSVvI0Hp1F'
});

var frm = '';
app.post('/', (req, res) => {
	res.return('TIT CLiT NINJA ACTION!');
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
	handleParams(req.query, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12089106000
app.post('/12089106000', (req, res) => {
	frm = '12089106000';
	hx(req.body, res);
	res.status(200).end();
});
//////////////////////////////////////////////  12134097000
app.post('/12134097000', (req, res) => {
	frm = '12134097000';
	hx(req.body, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12134099990
app.post('/12134099990', (req, res) => {
	frm = '12134099990';
	hx(req.body, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12134099991
app.post('/12134099991', (req, res) => {
	frm = '12134099991';
	hx(req.body, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12134099992
app.post('/12134099992', (req, res) => {
	frm = '12134099992';
	hx(req.body, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12134099993
app.post('/12134099993', (req, res) => {
	frm = '12134099993';
	hx(req.body, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12134099994
app.post('/12134099994', (req, res) => {
	frm = '12134099994';
	hx(req.body, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12134099995
app.post('/12134099995', (req, res) => {
	frm = '12134099995';
	hx(req.body, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12134099996
app.post('/12134099996', (req, res) => {
	frm = '12134099996';
	hx(req.body, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12134099997
app.post('/12134099997', (req, res) => {
	frm = '12134099997';
	hx(req.body, res);
	res.status(200).end();
});

//////////////////////////////////////////////  12134099998
app.post('/12134099998', (req, res) => {
	frm = '12134099998';
	hx(req.body, res);
	res.status(200).end();
});

// //////////////////////////////////////////////  12089106000
// app.post('/12089106000', (req, res) => {
// 	frm = '12089106000';
// 	hx(req.body, res);
// 	res.status(200).end();
// });

// //////////////////////////////////////////////  12089106000
// app.post('/12089106000', (req, res) => {
// 	frm = '12089106000';
// 	hx(req.body, res);
// 	res.status(200).end();
// });

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
	var res = fm.charAt(0);
	if (res == '+') {
		console.log('{}{}{}{}{}  found a + {}{}{}}{}{}{}');

		fm = remove_first_character(fm);
	}

	// nexmo.message.sendSms(frm, fm, txts, opts)
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
