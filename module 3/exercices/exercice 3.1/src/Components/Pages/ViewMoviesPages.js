import { clearPage } from '../../utils/render';
import { getAllMovies } from '../Models/movie';


viewMoviesPages();

function viewMoviesPages(){
    clearPage();
    const main = document.querySelector('main');

    const movies = getAllMovies();

    const tableMovies = renderMoviesInTables(movies);

    main.innerHTML = tableMovies;
}

function renderMoviesInTables(films){
    let table = `
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Duration</th>
                        <th>Budget</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
    `;

    films.forEach(element => {
        table+= `<tr>
            <td>${element.title}</td>
            <td>${element.duration}</td>
            <td>${element.budget}</td>
            <td>${element.link}</td>
        </tr>`;
    });

    table+= `
    </tbody>
    </table>`;

    return table;
}

export default viewMoviesPages;

