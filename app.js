const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Routes
const reservationRoutes = require('./routes/reservations');
const adminRoutes = require('./routes/admin');

// Middleware pour servir les fichiers statiques (HTML, CSS, etc.)
app.use(express.static('public'));

// Routes API
app.use('/reservations', reservationRoutes);
app.use('/admin', adminRoutes);

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
