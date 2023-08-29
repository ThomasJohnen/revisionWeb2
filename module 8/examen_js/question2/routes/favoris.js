const express = require('express');
const { addToFavoris } = require('../models/favoris');

const router = express.Router();

// add to favoris
router.post('/', (req, res) => {
  const idUser = req?.body?.idUser;
  const idPlace = req?.body?.idPlace;

  if (!idUser || !idPlace) return res.sendStatus(400);

  const addedoFavoris = addToFavoris(idUser, idPlace);

  return res.json(addedoFavoris);
});

module.exports = router;
