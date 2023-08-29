import { clearPage } from "../../utils/render";
import Navigate from "../Router/Navigate";
import {addOneQuestion } from "../../models/question";




const HomePage = () => {
    clearPage();
    const main = document.querySelector('main');
    main.innerHTML = `
    <form>
        <div class="form-group">
            <label for="questionForm">Question</label>
            <input type="text"
                class="form-control"
                id="questionControl"
                placeholder="la question">
        </div>
        <div class="form-group">
            <label for="reponseForm">Réponse</label>
            <input type="text"
                class="form-control"
                id="reponseControl"
                placeholder="la réponse">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary" id="soumission">Soumettre</button>
            <button type="submit" class="btn btn-primary" id="suivant">etape suivante</button>
        </div>
    </form>
`

    const form = document.querySelector('#soumission');

    form.addEventListener('click', (e) => {
        e.preventDefault();

        const question = document.querySelector('#questionControl');
        const response = document.querySelector('#reponseControl');

        const newQuestion = {
            question: question.value,
            reponse : response.value
        }

        addOneQuestion(newQuestion);
        HomePage();
    });

    const suivant = document.querySelector('#suivant');
    suivant.addEventListener('click', () => {Navigate('/chatBot')});
}




export default HomePage;

