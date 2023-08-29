import { clearPage } from "../../utils/render";
import { findQuestion } from "../../models/question";


const ChatBot = ()=>{
    clearPage();
    const main = document.querySelector('main');
    main.innerHTML = `
    <form>
        <div class="form-group">
            <label for="questionForm">Votre question</label>
            <input type="text"
                class="form-control"
                id="questionPosee"
                placeholder="la question">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Soumettre</button>
        </div>
        <div id="reponses"></div>
    </form>
    `;

    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const questionPosee = document.querySelector('#questionPosee').value;
        const object = findQuestion(questionPosee);

        const reponses = document.querySelector('#reponses');

        if(!object){
           const reponse = "Je ne sais pas quoi répondre";
          
           reponses.innerHTML += `
           <div>
            <p>${questionPosee}</p>
            <p>${reponse}</p>
           <div>
           `
        } else { 
            reponses.innerHTML += `
        <div>
         <p>${object.question}</p>
         <p>${object.reponse}</p>
        <div>
        `
    }
    });
};

export default ChatBot;