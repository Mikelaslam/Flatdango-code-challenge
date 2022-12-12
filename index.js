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

   
