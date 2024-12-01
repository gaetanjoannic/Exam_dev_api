const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { courtAvailability, courts } = require('../data/data');

const ADMIN_USERNAME = 'admybad';
const ADMIN_PASSWORD_HASH = bcrypt.hashSync('admybad', 10);
const JWT_SECRET = 'my_secret_key';

// Connexion de l'administrateur
const loginAdmin = (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).json({ message: 'Identifiants invalides' });
};

// Mettre à jour la disponibilité d'un terrain
const updateCourtStatus = (req, res) => {
  const { court, available } = req.body;

  if (!courts.includes(court)) {
    return res.status(400).json({ message: 'Terrain invalide' });
  }

  courtAvailability[court] = available;
  res.json({ message: `Le terrain ${court} est maintenant ${available ? 'disponible' : 'indisponible'}.` });
};

module.exports = {
  loginAdmin,
  updateCourtStatus
};
