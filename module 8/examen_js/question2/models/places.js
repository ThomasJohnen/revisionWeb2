const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/places.json');
const PLACES = [];

function createPlace(title, description) {
  const places = parse(jsonDbPath, PLACES);

  const createdPlace = {
    id: getNextId(),
    title,
    description,
  };

  places.push(createdPlace);

  serialize(jsonDbPath, places);

  return createdPlace;
}

function getNextId() {
  const users = parse(jsonDbPath, PLACES);
  const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = users[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

module.exports = {
  createPlace,
};
