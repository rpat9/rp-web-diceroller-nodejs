// Get all the necessary modules
const express = require('express');
const cors = require('cors');


// Create an Express app
const app = express();

// Enable CORS to allow cross-origin requests from my already deployed website
app.use(cors({
    origin: 'https://rp-web-dice-roller-d4bxhpezaafbdnca.centralus-01.azurewebsites.net'
}));

app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center;">Welcome to Dice Roller API Homepage!!</h1><p style="text-align: center;">Try /api/roll to roll dices for diceroller.</p>');
});

// Roll the dice
app.get('/api/roll', (req, res) => {
    const playerRoll = Math.floor(Math.random() * 6) + 1;
    const computerRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ playerRoll, computerRoll });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend API running on port ${PORT}`);
});