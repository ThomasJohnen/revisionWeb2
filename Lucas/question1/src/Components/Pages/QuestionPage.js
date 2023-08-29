import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import {findQuestion, readAllQuestions} from '../../models/question';

const questionPage = `
<div class="text-center">
  <h3>ChatBot</h3>

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
            <input type="submit" id="chatbotResponse" class="btn btn-primary" value="Poser la question" />
    </form>
</div>
<div id="allQuestions"></div>
<div id="respons"></div>
<input type="submit" id="precedent" class="btn btn-primary" value="Etape précédente" />
`;

const QuestionPage = () => {
    clearPage();

    const main = document.querySelector('main');
    main.innerHTML = questionPage;

    const questions = readAllQuestions();
    const questionDisplay = displayQuestions(questions);
    const allQuestions = document.querySelector("#allQuestions");
    allQuestions.innerHTML = questionDisplay;

    ajoutDesEcouteurs();
}

function displayQuestions(questions) {
  if (questions?.length === undefined || questions.length === 0) {
    return '<p class="p-5">(</p>';
  }

  let displayedQuestion = ``;

  questions.forEach((element) => {
    displayedQuestion += `
    Question : ${element.question}
    <p></p>
    Réponse : ${element.respons}
    <p></p>
    `;
  });

  return displayedQuestion;
}

function ajoutDesEcouteurs(){
    const questionPosee = document.querySelector("#question");
    const myForm = document.querySelector('form');
    myForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const questionFound = findQuestion(questionPosee.value);
      const r = document.querySelector("#respons");
      if(!questionFound){
        r.innerHTML = `
        Question : ${questionPosee.value}
        <p></p>
        Réponse : Je ne sais pas répondre a cette question
        `;
      }else{
        r.innerHTML = `
        Question : ${questionPosee.value}
        <p></p>
        Réponse : ${questionFound.respons}
        `;
      }
    });

    const precedentButton = document.querySelector("#precedent");
    precedentButton.addEventListener('click', () => {
      Navigate('/');
    });
}

export default QuestionPage;