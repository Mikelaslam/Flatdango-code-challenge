document.addEventListener('DOMContentLoaded', function() {
    fetchMovies();

});
//Initiating the fetch request to the server
function fetchMovies() {
    fetch('http://localhost:3000/Movies')
      .then(res => res.json())
      .then(data => {
        renderMovies(data);
        movieDetails(data[0]);

      });
    
   } 
//Rendering movies to the page
//Looping through the array creates a list for each movie
function renderMovies(data) {
    const movieList =document.querySelector('ul#list');
    
    for(let i = 0; < data.lenght; i++) {
        const movie = data[i]
        const filmLi = document.createElement('li');
        filmLi.innerHTML = movie.tittle;

        //creating a line break to separate the movies
        const line = document.createElement('hr');
        movieList.appendChild(line);
        movieList.appendChild(filmLi);
        filmLi.addEventListener('click', function(){
            movieDetails(movie);
        }
        )
    }
}
//Rendering the movie details to the page
function movieDetails(movie) {
    const movieDetails = document.getElementById('show-movie');
    movieDetails.innerHTML = `
    <h2>Tittle: ${movie.tittle}</h2>
    <p> RunTime: ${movie.runtime} minutes</p>
    <p> Capacity: ${movie.capacity}</p>
    <p> Show Time: ${movie.showtime}</p>
    <img scr= "${source.poste}">
    <p> ${movie.description}</p>
    <p> id = "tickets">Tickets Available: ${movie.tickets_sold}</p>
    <ul id ="users"><ul>
    <button id= "buy">Buy Tickets</button>

    `
    buyTicket(movie)
}
//Buying the ticket and displaying the remaining tickets
function buyTicket(movie) {
    const buyButton =document.getElementById('buy')
    buyButton.addEventListener('click', function(e) {
        e.preventDefault()
        const tickets = document.getElementById('tickets')
    
    })
}



