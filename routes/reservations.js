const express = require('express');
const router = express.Router();
const { getReservations, addReservation, getUserReservations } = require('../controllers/reservation');

// Route pour ajouter une réservation
router.post('/', addReservation);

// Route pour récupérer toutes les réservations
router.get('/', getReservations);

// Route pour récupérer les réservations d'un utilisateur
router.get('/:user', getUserReservations);

module.exports = router;
