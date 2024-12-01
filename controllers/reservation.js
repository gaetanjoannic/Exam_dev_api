const { reservations, courtAvailability, courts } = require('../data/data');

// Ajouter une réservation
const addReservation = (req, res) => {
  const { user, court, date, hour } = req.body;

  if (!courts.includes(court)) {
    return res.status(400).json({ message: 'Terrain invalide' });
  }

  if (!courtAvailability[court]) {
    return res.status(400).json({ message: `Le terrain ${court} est indisponible.` });
  }

  const existingReservation = reservations[court].find(
    (r) => r.date === date && r.hour === hour
  );

  if (existingReservation) {
    return res.status(400).json({ message: 'Ce créneau est déjà réservé.' });
  }

  reservations[court].push({ user, date, hour });
  res.json({ message: 'Réservation effectuée avec succès.' });
};

// Récupérer toutes les réservations
const getReservations = (req, res) => {
  res.json(reservations);
};

// Récupérer les réservations d'un utilisateur spécifique
const getUserReservations = (req, res) => {
  const { user } = req.params;
  const userReservations = [];

  for (const court of courts) {
    userReservations.push(...reservations[court].filter((r) => r.user === user));
  }

  res.json(userReservations);
};

module.exports = {
  addReservation,
  getReservations,
  getUserReservations
};
