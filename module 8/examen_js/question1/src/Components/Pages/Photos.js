import { clearPage } from '../../utils/render';
import readAllPlaces from "../../utils/places";


const places = readAllPlaces();

let index = 2;

const place = `
  <div class="container" id="carousel">
    <img src="${places[index].image}" alt="" id="image" class="custom-img"/>
  </div>
  <h3 id="titre">${places[index].name}</h3>
  <div class="container">
    <input type="button" value="précédent" id="precedent" />
    <input type="button" value="suivant" id="suivant" />
  </div>
  `;

const Photos = () => {
  clearPage();
  const main = document.querySelector('main');
  main.innerHTML = place;

  ajoutEcouteurs();
};

function ajoutEcouteurs(){
  const precedent = document.querySelector("#precedent");
  precedent.addEventListener('click', () => {
    if(index > 0){
      index -= 1;
      const image = document.querySelector("#image");
      image.src = places[index].image;
      const titre = document.querySelector("#titre");
      titre.innerHTML = places[index].name;
    }
  });

  const suivant = document.querySelector("#suivant");
  suivant.addEventListener('click', () => {
    if(index < places.length-1){
      index += 1;
      const image = document.querySelector("#image");
      image.src = places[index].image;
      const titre = document.querySelector("#titre");
      titre.innerHTML = places[index].name;
    }
  });
}


export default Photos;
