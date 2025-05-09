const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import des routes

const vendeursRoutes = require('./app/routes/vendeursRoutes'); // Route CRUD admin


// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // Pour analyser les requêtes JSON
app.use(cors()); // Pour permettre les requêtes cross-origin




// Connexion à MongoDB
mongoose.set('strictQuery', false); // ou true selon ton besoin
mongoose.connect('mongodb://localhost:27017/startdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connecté à MongoDB"))
  .catch(err => console.error("Erreur de connexion à MongoDB:", err));

// Définition des routes
app.use('/api/vendeurs', vendeursRoutes); // Routes pour le CRUD admin



// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur le port ${PORT}`));
