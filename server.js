import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';
import urlRoutes from './api/index.js';

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
connectDB();


// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to student management system!');
});

app.use('/', urlRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

