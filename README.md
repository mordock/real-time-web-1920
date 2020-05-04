# Exercise 2 - Crypto

Link to repo: https://github.com/mordock/RTW_Exercise_2  
Link to app: https://maxweijers-rtw-crypto.herokuapp.com/  

## Concept
A website to help you make short term decisions if you want to invest in Crypto curreny. This is done by showing you how much of a certain crypto currency is curculated every minute. In addition to this it has a chat functionality for the different currency so you can discuss tactics and happenings with the currencies. 

## Install
Clone or download the project.   
Npm intall the following packages:  
Express, Socket.io and binance.
Nodemon is a dev package for auto refreshing your server  

## To do 

- [x] Receive realtime data from the Binace API
- [x] Filter data by the minute so it's usefull for the user
- [x] Get data from different Crypto currencies
- [x] Simple chat so users can talk globally about what's happening
- [x] Simple rooms so users can talk per currency about what's happening

## DLC diagram
![alt_text](https://github.com/mordock/real-time-web-1920/blob/master/course/resources/Blank%20Diagram2.png)

## Real-time event
The website uses several real time events which get send over on a user action or at a constant rate:
Currency events
- bitcoin, when the user asks for a bitcoin data stream
- ethereum, when the user asks for a ethereum data.
- BTCtrade/ETHtrade, send every 5 second after the user asks for bitcoin data. Contains the amount traded this minute.
- BTCreset/ETHreset, send once every minute to reset the amount on screen for the user.
Chat events
- chat, when a user sends a message, contains the message, username and current room.
- joinGlobal/Bitcoin/Ethereum, when a user wants to join a room.

## Packages
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [Binance](https://www.npmjs.com/package/binance)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## API
Official documentation: https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md  
NPM package documentation: https://www.npmjs.com/package/binance  
The API can be used with the NPM package, but it helps streamline the proces of getting data from the API.

Example realtime data object:  
![alt_text](https://github.com/mordock/real-time-web-1920/blob/master/course/resources/Object.png)

## Goals

- Deal with real-time complexity
- Handle real-time client-server interaction
- Handle real-time data management
- Handle multi-user support

## Rubric
- De app staat online. Uit de documentatie kan worden afgeleid wat het project inhoudt. De data life cycle, real-time events, en externe databron zijn beschreven.  
- [DLC diagram](#DLC-diagram)
- [Real-time events](#Real-time-event)
- [API](#API)

[rubric]: https://docs.google.com/spreadsheets/d/e/2PACX-1vSd1I4ma8R5mtVMyrbp6PA2qEInWiOialK9Fr2orD3afUBqOyvTg_JaQZ6-P4YGURI-eA7PoHT8TRge/pubhtml
