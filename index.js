const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const axios = require('axios');

const app = dialogflow();

app.intent('resolve', (conv, params) => {
	let url = params.url;
	let dns_record = params.dns_record;
	try {
		return axios.get("https://cloudflare-dns.com/dns-query?name="+url+"&type="+dns_record, {headers: {'Accept': 'application/dns-json'}}).then(res => {
			//let resp_string = "";
			if (res.data.Answer.length >= 2) {
				for (var o=0; o<2; o++) {
					if (o == 2) {
						conv.close(","+res.data.Answer[o].data);
					} else {
						conv.add(res.data.Answer[o].data);
					}
				}
			}
			else {
				for (var i=0; i<res.data.Answer.length; i++) {
					let max = res.data.Answer.length - i;
					if (max == 0) {
						conv.close(","+res.data.Answer[i].data);
					} else {
						conv.add(res.data.Answer[i].data);
					}
				}
			}
		});
	} catch (e) {
		conv.close("I did an oopsie. Try again later.");
	}
});

exports.resolve = functions.https.onRequest(app);
