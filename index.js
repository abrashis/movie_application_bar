document.getElementById("select").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value;
  const url = `http://www.omdbapi.com/?s=${query}&apikey=edbd2626`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        displayMovies(data.Search);
      } else {
        alert("Movie not found!");
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function displayMovies(movies) {
  const movieContainer = document.createElement("div");
  movieContainer.className = "movie-container";

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.className = "movie";

    movieElement.innerHTML = `
        <h2>${movie.Title}</h2>
        <p>Year: ${movie.Year}</p>
        <img src="${movie.Poster}" alt="${movie.Title} Poster">
      `;

    movieContainer.appendChild(movieElement);
  });

  document.body.appendChild(movieContainer);
}
