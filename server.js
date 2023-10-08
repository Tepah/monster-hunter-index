const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const monsters = require('./routes/api/monsters');


const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({extended: false }));

// use Routes
app.use('/api/monsters', monsters);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
