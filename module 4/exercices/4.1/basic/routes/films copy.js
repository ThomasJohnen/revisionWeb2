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
        const minimum = parseInt(req.query['minimum-duration'], 10);
        res.json(LISTFILMS.filter(f => f.duration >= minimum));
    }
    res.json(LISTFILMS);
});

router.get('/:id', (req, res, next) => {
  const film = LISTFILMS.find(film => film.id === parseInt(req.params.id))
  if(!film) return res.sendStatus(404);
  res.json(film);
});

router.post('/', (req, res) => {
  
  const title = req.body.title;
  const duration = req?.body?.duration ;
  const budget = req?.body?.budget;
  const link = req?.body?.link;
  const id = LISTFILMS.length + 1;

  const newFilm = {
    id: id,
    title: title,
    duration: duration,
    budget: budget,
    link: link
  };

  LISTFILMS.push(newFilm);
  res.json(newFilm);
});

router.delete('/:id', (req, res) => {
 const film = LISTFILMS.find(film => film.id === parseInt(req.params.id));
 if(film == null){
  return res.sendStatus(404);
 }
 const IndexOfFilm = LISTFILMS.indexOf(film);
 LISTFILMS.splice(IndexOfFilm, 1);
 return res.json(film);
});

router.patch('/:id', (req, res) =>{


  const title = req?.body?.title;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;
  
  if(!title || !duration || !budget || !link) return res.sendStatus(400);
  const index = LISTFILMS.findIndex(film => film.id == req.params.id);
  const film = LISTFILMS.find(film => film.id == parseInt(req.params.id));
  if(film == null) return res.sendStatus(404);

  const body = req.body;
  
  const newFilm = {
    ...film,
    ...body,
  };

  LISTFILMS[index] = newFilm;
  

  return res.json(newFilm);


});

module.exports = router;