const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/users.json');
const USERS = [];
const FAVORIS = [];

function readAllUsers() {
  const users = parse(jsonDbPath, USERS);
  return users;
}

function createUser(name, mail) {
  const users = parse(jsonDbPath, USERS);

  const createdUser = {
    id: getNextId(),
    name,
    mail,
  };

  users.push(createdUser);

  serialize(jsonDbPath, users);

  return createdUser;
}

function getNextId() {
  const users = parse(jsonDbPath, USERS);
  const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = users[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

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

function readAllFavoris() {
  const favoris = parse(jsonDbPath, FAVORIS);
  return favoris;
}

module.exports = {
  createUser,
  readAllUsers,
  addToFavoris,
  readAllFavoris,
};
