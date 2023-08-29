import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import {addOneQuestion} from '../../models/question';

const homePage = `
<div class="text-center">
  <h3>Etape d'entrainement</h3>

  <form class="px-5">
            <div class="mb-3">
              <label for="question">Question</label>
              <input
                class="form-control"
                type="text"
                name="question"
                id="question"
                required
              />
            </div>
            <div class="mb-3">
              <label for="respons">Réponse</label>
              <input
                class="form-control"
                type="text"
                name="respons"
                id="respons"
                required
              />
            </div>
            <input type="submit" id="addExemple" class="btn btn-primary" value="Enregistrer exemple" />
    </form>
    <p></p>
    <input type="submit" id="next" class="btn btn-primary" value="étape suivante" />
</div>
`;


const HomePage = () => {
  clearPage();
  const main = document.querySelector('main');
  main.innerHTML = homePage;

  ajoutDesEcouteurs();
};

function ajoutDesEcouteurs(){
  const question = document.querySelector("#question");
  const respons = document.querySelector("#respons");

  const myForm = document.querySelector('form');
  myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const QuestionToBeCreated = {
      question : question.value,
      respons: respons.value,
    };

    addOneQuestion(QuestionToBeCreated);
    HomePage();
  });

  const next = document.querySelector("#next");
  next.addEventListener('click', () => {
    Navigate('/Questions');
  });
}


export default HomePage;