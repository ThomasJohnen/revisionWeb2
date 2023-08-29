const express = require('express');
const { createPlace } = require('../models/places');

const router = express.Router();

// Create a place
router.post('/', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;

  if (!name || !description) return res.sendStatus(400);

  const createdPlace = createPlace(name, description);

  return res.json(createdPlace);
});

module.exports = router;
