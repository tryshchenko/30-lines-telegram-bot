const Bot = require('node-telegram-bot-api');
const request = require('request');

const token = require('./token');
const url = 'https://launchlibrary.net/1.3/launch';
const trigger = 'I want to travel!';

const bot = new Bot(token, {polling: true});

const prepareData = (body) => {
	const launches = JSON.parse(body).launches;
	return launches.filter((launch) => launch !== undefined)
		.map((launch) => `${launch.name} on ${launch.net}`)
		.join('\n\n');
};

bot.on('message', (msg) => {
	if (msg.text.toString() === trigger) {
		return request(url, (err, resp, body) => {
			bot.sendMessage(msg.chat.id, prepareData(body));
		});
	}

 	bot.sendMessage(msg.chat.id, 'Hi, do you want to travel?', {
		reply_markup: {
		    	keyboard: [[trigger], ['Bulk option']]
		    }
		}
	);
});