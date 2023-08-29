const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/favoris.json');
const FAVORIS = [];

function addToFavoris(idU, idP) {
  const idUser = parseInt(idU, 10);
  const idPlace = parseInt(idP, 10);

  const favoris = parse(jsonDbPath, FAVORIS);

  const addedToFavoris = {
    id: getNextId(),
    idUser,
    idPlace,
  };

  favoris.push(addedToFavoris);

  serialize(jsonDbPath, favoris);

  return addedToFavoris;
}

function getNextId() {
  const users = parse(jsonDbPath, FAVORIS);
  const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = users[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

module.exports = {
  addToFavoris,
};
