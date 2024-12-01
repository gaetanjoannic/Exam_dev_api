const express = require('express');
const router = express.Router();
const { loginAdmin, updateCourtStatus } = require('../controllers/admin');
const { authenticateAdmin } = require('../middlewares/authentification');

// Route pour se connecter en tant qu'administrateur
router.post('/login', loginAdmin);

// Route pour mettre à jour le statut d'un terrain (nécessite une authentification)
router.post('/court/status', authenticateAdmin, updateCourtStatus);

module.exports = router;
