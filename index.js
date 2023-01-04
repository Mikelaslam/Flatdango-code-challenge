// document.addEventListener('DOMContentLoaded', function() {
//     fetchMovies();
//     movieDetails();

// });
//Initiating the fetch request to the server
// function fetchMovies() {
//     fetch('http://localhost:3000/Movies')
//       .then(resp => resp.json())
//       .then(data => {
//         renderMovies(data);
//         movieDetails(data[0]);

//       });
   
//    } 
// 
// function renderMovies(data) {
//     const movieList =document.querySelector('ul#list');
    
//     for(let i = 0; i < data.length; i++) {
//         const movie = data[i];
//         const filmli = document.createElement('li');
//         filmli.innerHTML = movie.title;

//         //creating a line break to separate the movies
//         const line = document.createElement('hr');
//         movieList.appendChild(line);
//         movieList.appendChild(filmli);
//         filmli.addEventListener('click', function(){
//             movieDetails(movie);
//         }
        
//     )}
// }
// 
// function movieDetails(movie) {
//     const movieDetails = document.getElementById('show-movie');
//     movieDetails.innerHTML =`
//     <h2> Title: ${movie.title}</h2>
//     <p id= "yolo">RunTime: ${movie.runtime} minutes</p>
//     <p id = "yolo">Capacity: ${movie.capacity}</p>
//     <p id = "yolo">Show Time: ${movie.showtime}</p>
//     <img id = "images" src="${movie.poster}">
//     <p id = "desc">${movie.description}</p>
//     <p id = "tickets">Tickets Available: ${movie.tickets_sold}</p>
//     <ul id ="users"><ul>
//     <button id= "buy">Buy Tickets</button>
    
//      `
//     buyTicket(movie)

// }

// function buyTicket(movie) {
// const buyButton = document.getElementById('buy');
// buyButton.addEventListener('click', function() {
// if (movie.tickets_sold > 0) {
// movie.tickets_sold--;
// const ticketsRemaining = document.getElementById('tickets');
// ticketsRemaining.innerHTML = ${movie.tickets_sold};
// } else {
// alert("Sorry, there are no more tickets available for this movie.");
// });


document.addEventListener('DOMContentLoaded', function() {
    fetchMovies();
    movieDetails();
});
//Initiating the fetch request to the server

function fetchMovies() {
    fetch('http://localhost:3000/Movies')
        .then(resp => resp.json())
        .then(data => {
            renderMovies(data);
            movieDetails(data[0]);
        });
}
//Rendering movies to the page
//Looping through the array creates a list for each movie

function renderMovies(data) {
    const movieList = document.querySelector('ul#list');
    
    for (let i = 0; i < data.length; i++) {
        const movie = data[i];
        const filmli = document.createElement('li');
        filmli.innerHTML = movie.title;

        const line = document.createElement('hr');
        movieList.appendChild(line);
        movieList.appendChild(filmli);
        filmli.addEventListener('click', function() {
            movieDetails(movie);
        });
    }
}
//Rendering the movie details to the page 
//so as to be displayed in a specific manner
function movieDetails(movie) {
    const movieDetails = document.getElementById('show-movie');
    movieDetails.innerHTML = `
        <h2> Title: ${movie.title}</h2>
        <p id="yolo">RunTime: ${movie.runtime} minutes</p>
        <p id="yolo">Capacity: ${movie.capacity}</p>
        <p id="yolo">Show Time: ${movie.showtime}</p>
        <img id="images" src="${movie.poster}">
        <p id="desc">${movie.description}</p>
        <p id="tickets">Tickets Available: ${movie.tickets_sold}</p>
        <ul id="users"><ul>
        <button id="buy">Buy Tickets</button>
    `;
    buyTicket(movie);
}
//Working on the Buy ticket button 
//When a buyer buys the ticket, the available tickets reduce by 1
//As soon as the remaining tickets is zero, the user is not able to buy the ticket

function buyTicket(movie) {
    const buyButton = document.getElementById('buy');
    buyButton.addEventListener('click', function() {
        if (movie.tickets_sold > 0) {
            movie.tickets_sold--;
            const ticketsRemaining = document.getElementById('tickets');
            ticketsRemaining.innerHTML = `Tickets Available: ${movie.tickets_sold}`;
        } else {
            alert("Sorry, there are no more tickets available for this movie.");
        }
    });
}
