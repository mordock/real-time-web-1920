# Exercise 2 - Crypto

Link to repo: https://github.com/mordock/RTW_Exercise_2  
Link to app: https://maxweijers-rtw-crypto.herokuapp.com/  

Shoutout to Nathan for helping me with the server:  
https://github.com/NathanKeyzer/real-time-web-1920

## Concept
A website to help you make short term decisions if you want to invest in Crypto curreny. This is done by showing you how much of a certain crypto currency is curculated every minute. In addition to this it has a chat functionality for the different currency so you can discuss tactics and happenings with the currencies. 

## Features
Show user the amount of currency traded every 5 seconds if one is selected. Also every minute the amount is saved to a list so the user can see the differences with every minute. This works for both Bitcoin and Ethereum.
A chat functionality with 3 different rooms, global, Bitcoin and Ethereum. So people can discuss what's happening to those currencies.
![alt_text](https://github.com/mordock/real-time-web-1920/blob/master/course/resources/website.png)

## Install
Clone or download the project.   
Npm intall the following packages:  
Express, Socket.io and binance.
Nodemon is a dev package for auto refreshing your server.    

## To do 

- [x] Receive realtime data from the Binace API
- [x] Filter data by the minute so it's usefull for the user
- [x] Get data from different Crypto currencies
- [x] Simple chat so users can talk globally about what's happening
- [x] Simple rooms so users can talk per currency about what's happening

## DLC diagram
![alt_text](https://github.com/mordock/real-time-web-1920/blob/master/course/resources/Blank%20Diagram.png)

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
- **De app staat online. Uit de documentatie kan worden afgeleid wat het project inhoudt. De data life cycle, real-time events, en externe databron zijn beschreven.**  
- [DLC diagram](#DLC-diagram)
- [Real-time events](#Real-time-event)
- [API](#API)  

-	**Er is voldoende real-time functionaliteit om begrip te toetsen. Een groot deel van de functionaliteit is zelf geschreven. Student is in staat online voorbeelden naar zijn/haar hand te zetten.**  
I use the Binance package to call the API, this helps you with the API calls, instead of have to build it yourself you can call certain methods which will give you data about certain currencies when gives the correct parameters. It helps streamline the connection between the API and the user(me).
The actual logic of what to do with the data is written by myself. 

- **De user kan door interactie met de app het datamodel van de server in real time beïnvloeden door direct data aan te passen OF door de API requests tussen server en source te beïnvloeden. De student heeft eigenhandig de datamanipulaties opgezet.**  
In my case you can change the API call:  
![alt_text](https://github.com/mordock/real-time-web-1920/blob/master/course/resources/btc.png)  
![alt_text](https://github.com/mordock/real-time-web-1920/blob/master/course/resources/eth.png)

- **De server houdt een datamodel bij en elke client wordt de juiste data doorgestuurd.**  
The server remembers the amount of currency of the current minute, this gets send every 5 seconds. After a minute a final value will be send to you for a list of previous minutes. This only happens to people who are 'subscribed' to the currency. 

- **Meerdere clients kunnen verbinden met de server. Interactie werkt zoals verwacht en is niet afhankelijk van hoeveel clients aanwezig zijn. De student kan uitleggen hoe de app dit aanpakt.**  
The amount of traded currency is regulated on the server, this causes every user who subscribes to a currency to be send the data. Then the client handles displaying this data. So if people join at different points in time they will see the same data, but some will have more or less data. So people can always discuss the sama data in the chats. 

## Future improvements  
- Have data already seen be persistant if you close the tab.  
- Show different info about the transaction, like transaction cost and amount of made transactions.  

[rubric]: https://docs.google.com/spreadsheets/d/e/2PACX-1vSd1I4ma8R5mtVMyrbp6PA2qEInWiOialK9Fr2orD3afUBqOyvTg_JaQZ6-P4YGURI-eA7PoHT8TRge/pubhtml
