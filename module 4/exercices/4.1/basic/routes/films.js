var express = require('express');
var router = express.Router();

const LISTFILMS = [
  {
    id: 1,
    title: 'Iron Man 2 :<br>The mandarin',
    duration: 135,
    budget: 210,
    link: 'www.hevinci.be',
  },
  {
    id: 2,
    title: 'Star Wars :<br> The Empire strike back',
    duration: 160,
    budget: 270,
    link: 'www.hevinci.be',
  },
  {
    id: 3,
    title: 'Dr Strange :<br> In the multiverse of madness',
    duration: 140,
    budget: 180,
    link: 'www.hevinci.be',
  }
];

router.get('/', (req, res, next) => {
    let filtredFilms;
    if(req.query['minimum-duration']){
        filtredFilms =     }
    res.json(filtredFilms ?? LISTFILMS);
})