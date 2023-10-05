class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
  }
}

// Create an instance of the class Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example array of Movie instances
const movies = [
  new Movie("Movie 1", "Studio 1", "PG"),
  new Movie("Movie 2", "Studio 2", "R"),
  new Movie("Movie 3", "Studio 3"),
  casinoRoyale, // Adding the created instance
];

// Use the getPG method to filter movies with a rating of "PG"
const pgMovies = Movie.getPG(movies);

console.log(pgMovies);
