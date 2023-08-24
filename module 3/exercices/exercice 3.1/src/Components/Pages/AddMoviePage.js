import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import { addOneMovie } from '../Models/movie';

const addMoviePage = 
`
<div>
  <h1>Add Movie</h1>
  <form>
      <label>
          Title: <input type="text" name="title" id="title" required>
      </label>
      <label>
          Duration (in minutes): <input type="number" name="duration" id="duration" required>
      </label>
      <label>
          Budget: <input type="number" name="budget" id="budget" required>
      </label>
      <label>
          Link: <input type="text" name="link" id="link" required>
      </label>
      <input type="submit" value="Add Movie">
  </form>
</div>
`

const AddMoviePage = () => {
  clearPage();
  renderGoBackHomeButton();
};

function renderGoBackHomeButton(){
  const main = document.querySelector('main');
  main.innerHTML = addMoviePage;

  // Handle form submission
  const form = document.querySelector('form');
  const title = document.querySelector('#title');
  const duration = document.querySelector('#duration');
  const budget = document.querySelector('#budget');
  const link = document.querySelector('#link');

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const movie = {
          title: title.value,
          duration: duration.value,
          budget: budget.value,
          link: link.value
      };

      addOneMovie(movie);
      Navigate('/ViewMoviesPage');
  });
}

export default AddMoviePage;
