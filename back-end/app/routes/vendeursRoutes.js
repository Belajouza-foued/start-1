const express = require('express');
const vendeurs = require('../controllers/vendeursControllers');  
const router = express.Router();

// Créer un nouvel admin
router.post('/', vendeurs.create);  

// Récupérer tous les admins
router.get('/', vendeurs.findAll);      

// Récupérer un admin spécifique avec son ID
router.get('/:id', vendeurs.findOne);

// Mettre à jour un admin avec son ID
router.put('/:id', vendeurs.update);

// Supprimer un admin avec son ID
router.delete('/:id', vendeurs.delete);

// Supprimer tous les admins
router.delete('/', vendeurs.deleteAll);

module.exports = router;  // Exporter le routeur
