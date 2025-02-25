// Get all the necessary modules
const express = require('express');
const cors = require('cors');


// Create an Express app
const app = express();

// Enable CORS to allow cross-origin requests from my already deployed website
app.use(cors());

// Roll the dice
app.get('/api/roll', (req, res) => {
    const playerRoll = Math.floor(Math.random() * 6) + 1;
    const computerRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ playerRoll, computerRoll });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend API runningon port ${PORT}`);
});