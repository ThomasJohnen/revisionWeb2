import { clearPage } from "../../utils/render";

const formTraduction = `
<div class="text-center">
  <form class="px-5" id="form1">
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
            <input type="submit" class="btn btn-primary" value="Traduire" />
    </form>
    <div id="tradFR">Traduction en Anglais : </div>
    <p></p>
    <form class="px-5" id="form2">
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
            <input type="submit" class="btn btn-primary" value="Traduire" />
    </form>
    <div id="tradEN">Traduction en francais : </div>  
</div>
`;

const Traduction = () => {
    clearPage();
    const main = document.querySelector('main');
    main.innerHTML = formTraduction;

    ajoutDesEcouteurs();
};

function ajoutDesEcouteurs(){

    const myForm1 = document.querySelector("#form1");
    myForm1.addEventListener('submit', traductionFR);
    const myForm2 = document.querySelector("#form2");
    myForm2.addEventListener('submit', traductionEN);
}

async function traductionFR(e){
    e.preventDefault();

    const fr = document.querySelector('#fr').value;
    const tradFR = document.querySelector("#tradFR");

    const response = await fetch(`/api/trad/fr?query=${fr}`);
    if (!response.ok){
        tradFR.innerHTML = `Traduction en Anglais : <span class="error-message">Impossible d'obtenir la traduction</span>`;
    }else{
        const trad = await response.json();
        tradFR.innerHTML = `Traduction en Anglais : ${trad.en}`;
    }

}

async function traductionEN(e){
    e.preventDefault();

    const en = document.querySelector('#en').value;
    const tradEN = document.querySelector("#tradEN");

    const response = await fetch(`/api/trad/en?query=${en}`);
    if (!response.ok){
        tradEN.innerHTML = `Traduction en Francais : <span class="error-message">Impossible d'obtenir la traduction</span>`;
    }else{
        const trad = await response.json();
        tradEN.innerHTML = `Traduction en Francais : ${trad.fr}`;
    }

}
  
export default Traduction;