import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import './img/bg.jpg';
import drStrange from './img/Dr Strange.jpg';
import starWars from './img/starWars.png';
import ironMan from './img/IronMan.jpg';


renderIndexHtml();

function renderIndexHtml(){
    const mainWrapper = document.querySelector('main');
    const aliCol = document.createElement('div');
    aliCol.className = 'aliCol';

    mainWrapper.appendChild(aliCol);

    // premiere image
    const div1 = document.createElement('div');
    div1.className = 'col';
    const imageDrStrange = renderImage(drStrange);
    const titre1 = document.createElement('h2');
    titre1.innerHTML = 'Dr Strange :<br> In the multiverse of madness';
    const button1 = document.createElement('button');
    button1.className = 'button';
    button1.innerText = 'Download here';

    // ajout des éléments puis de la première div

    div1.appendChild(imageDrStrange);
    div1.appendChild(titre1);
    div1.appendChild(button1);
    aliCol.appendChild(div1);

    // deuxième image
    const div2 = document.createElement('div');
    div2.className = 'col';
    const imageStarWars = renderImage(starWars);
    const titre2 = document.createElement('h2');
    titre2.innerHTML = 'Star Wars :<br> The Empire strike back';
    const button2 = document.createElement('button');
    button2.className = 'button';
    button2.innerText = 'Download here';


    // ajout 2eme div

    div2.appendChild(imageStarWars);
    div2.appendChild(titre2);
    div2.appendChild(button2);
    aliCol.appendChild(div2);

    // troisième image

    const div3 = document.createElement('div');
    div3.className = 'col';
    const imageIronMan = renderImage(ironMan);
    const titre3 = document.createElement('h2');
    titre3.innerHTML = 'Iron Man 2 :<br>The mandarin';
    const button3 = document.createElement('button');
    button3.className = 'button';
    button3.innerText = 'Download here';

    // ajout 3eme div

    div3.appendChild(imageIronMan);
    div3.appendChild(titre3);
    div3.appendChild(button3);
    aliCol.appendChild(div3);
}

function renderImage(imageURL){
    const baliseImage = document.createElement('img');
    baliseImage.src = imageURL;
    baliseImage.className = 'displayed';
    baliseImage.height = '200';
    return baliseImage;
}

/*

function renderFormArray(){
    const mainWrapper = document.querySelector('main');
    const form = `

    `
}

<div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
</div>

*/