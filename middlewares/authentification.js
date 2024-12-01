const jwt = require('jsonwebtoken');
const JWT_SECRET = 'my_secret_key';

const authenticateAdmin = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Accès non autorisé' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Accès non autorisé' });
    req.user = decoded;
    next();
  });
};

module.exports = {
  authenticateAdmin
};
