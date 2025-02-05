const express = require('express');
const cors = require('cors'); 
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const port = 5000;

const app = express();


connectDB();


app.use(cors({
  origin: 'http://localhost:4200', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes pour les posts
app.use('/post', require('./routes/post.routes'));

// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
