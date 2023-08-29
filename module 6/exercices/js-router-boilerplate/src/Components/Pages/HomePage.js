import { clearPage } from "../../utils/render";

const HomePage = async () => {
  clearPage();
  try{
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    const jokes = await response.json()

    const main = document.querySelector("main")

    main.innerHTML = `
      <div>
        <h1>${jokes.joke}</h1>
        <p>${jokes.category}</p>
      </div>
      `
  
  } catch(err){
    console.error('HomePage::error: ', err);
  }
  
};

export default HomePage;
