const movies=[];

function getAllMovies(){
    return movies;
}

function addOneMovie(film){
    movies.push(film);
}


export {getAllMovies, addOneMovie};