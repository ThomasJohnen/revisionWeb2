import { clearPage } from '../../utils/render';
import readAllPlaces from "../../utils/places";

const HomePage = () => {
  clearPage();
  const main = document.querySelector('main');
  const places = readAllPlaces();

  places.forEach((place) => {
    const table = `
    <div> ${place.name} </div>
    `;

    main.innerHTML += table;
  });
};

export default HomePage;
