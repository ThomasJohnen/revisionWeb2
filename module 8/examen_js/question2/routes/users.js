const express = require('express');
// eslint-disable-next-line object-curly-newline
const { readAllUsers, createUser, addToFavoris, readAllFavoris } = require('../models/users');

const router = express.Router();

// Read all the films, filtered by minimum-duration if the query param exists
router.get('/', (req, res) => {
  const allFilms = readAllUsers(req?.query);

  return res.json(allFilms);
});
// Create a user
router.post('/', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const mail = req?.body?.mail?.length !== 0 ? req.body.mail : undefined;

  if (!name || !mail) return res.sendStatus(400);

  const users = readAllUsers();
  let user;

  // eslint-disable-next-line consistent-return
  users.forEach((element) => {
    if (element.mail === mail) {
      user = element;
    }
  });

  if (user !== undefined) {
    return res.sendStatus(400);
  }

  const createdUser = createUser(name, mail);
  return res.json(createdUser);
});

// add to favoris
router.post('/favoris', (req, res) => {
  const idUser = req?.body?.idUser;
  const idPlace = req?.body?.idPlace;

  if (!idUser || !idPlace) return res.sendStatus(400);

  const favoris = readAllFavoris();
  let thefavoris;

  favoris.forEach((favori) => {
    if (favori.idUser === idUser && favori.idPlace === idPlace) thefavoris = favori;
  });

  if (thefavoris !== undefined) return res.sendStatus(400);

  const addedoFavoris = addToFavoris(idUser, idPlace);

  return res.json(addedoFavoris);
});

module.exports = router;
