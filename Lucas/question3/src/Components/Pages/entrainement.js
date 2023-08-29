// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const entrainement = `
<div class="text-center">
  <form class="px-5">
            <div class="mb-3">
              <label for="francais">Francais</label>
              <input
                class="form-control"
                type="text"
                name="francais"
                id="fr"
                required
              />
            </div>
            <div class="mb-3">
              <label for="English">English</label>
              <input
                class="form-control"
                type="text"
                name="English"
                id="en"
                required
              />
            </div>
            <input type="submit" class="btn btn-primary" value="ajouter la traduction" />
    </form>  
</div>
`;


const Entrainement = () => {
  clearPage();

  const main = document.querySelector('main');
  main.innerHTML = entrainement;

  ajoutDesEcouteurs();
};


function ajoutDesEcouteurs(){
  const myForm = document.querySelector('form');
  myForm.addEventListener('submit', addTraduction);
}

async function addTraduction(e){
  e.preventDefault();

  const fr = document.querySelector('#fr').value;
  const en = document.querySelector('#en').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      fr,
      en
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch('/api/trad', options);
  if (!response.ok){
    throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  }

  Entrainement();
}

export default Entrainement;
