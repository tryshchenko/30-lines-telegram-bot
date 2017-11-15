const Bot = require('node-telegram-bot-api');
const request = require('request');

const token = require('./token');
const bot = new Bot(token, {polling: true});
const url = 'https://launchlibrary.net/1.3/launch';

const prepareData = (body) => {
	const launches = JSON.parse(body).launches;
	return launches.filter((launch) => launch !== undefined)
		.map((launch) => `${launch.name} on ${launch.net}`)
		.join('\n\n'); // new line.
};

bot.on('message', (msg) => {
 	const chatId = msg.chat.id;
 	const text = msg.text.toString();
	if (text.toLowerCase().indexOf('i want to travel!') === 0) {
		request(url, (error, response, body) => {
			bot.sendMessage(msg.chat.id, prepareData(body));
		});
		return;
	}
 	bot.sendMessage(chatId, 'Hi, do you want to travel!', {
		reply_markup: {
		    	keyboard: [["I want to travel!"], ["Bulk"]]
		    }
		}
	);
});