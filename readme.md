![Logo](https://github.com/tryshchenko/30-lines-telegram-bot/raw/master/icon.png)
# 2Space - Telegram Bot in 30 Lines of Code Example
You can try it out on telegram - @tospace

This telegram bot is a little bit more than standard "Hello World" application - it does something. It gets the information about closest launches of spacecrafts.

### This library was created to illustrate a bot creation process as simple as it possible.

I have created it as a demo for my presentation on IT NonStop Wroclaw. Links and descriptions are going to be provided when event will happen.

## Environment
It works literally everywhere. Server is not mandatory - it works well from your personal device.

## Running
1. Register your bot with @botfather. It will give you a token
2. Create token file: `cp token-example.js token.js`
3. Place your token string inside
4. `npm install`
5. `npm start`
6. Enjoy. Just type your bot a message in telegram

## Warning
It is not production ready solution (I know, it's obvious, but...). In real life it makes sense to use a way more complicated algorithms of language recognition, not `indexOf`. Also in real life it's a very bad idea to hardcore URLs like it's done in the example. Only morons do so on real projects.
Storing cases in one folder is not a good practice either, some architecture is very helpful. Just imagine it's kind of router and cases are action of controllers - with such abstraction life is way easier.

## Credentials
Data is provided by API - https://launchlibrary.net
Icon used for application was taken here https://www.flaticon.com/authors/smashicons

Project uses 2 libraries: node-telegram-bot-api and request.

### Thank you for checking this page.
