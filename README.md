# rp-web-diceroller-nodejs

Rudra Patel - Implementation of Web Dice Roller using HTML, CSS, and JavaScript - Email: rudrappatel@lewisu.edu

Web dice roller using nodejs and RESTful API.

# Key Features:

- Simple UI for the webpage
- Game is designed to be Player vs Computer
- Backend is done with NodeJS and the framework ExpressJS.

# Getting Started:

- First I had to find images for each die since I planned to display player's last roll. Images for the dices were taken from [Game Icons](https://game-icons.net/1x1/delapouite/dice-six-faces-two.html). 

- I opted for a fairly simple design and styling of the webpage. 

- To make styling even more easier, a recommendation would be to use nested div elements which you can style as you wish.

- Since the game is going to 20 only, I had to keep track of the score in JavaScript. The scores are tracked and updated each time there is a roll. The image of the dice will be displayed based on the number that the player rolls.

# More on Backend: 

- Utilizes Express of NodeJS

- Connects to already existing dice-roller website. Before we rolled the die together. Now it will use the server and API for rolling.