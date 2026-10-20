// Script for B2 - Object operations.

    // B2.2: Stores the movie's initial title and release year.
const myMovie = {
    title: "The longest day",
    year: 1964
};

// Displays a copy to preserve the object's initial state in the console.
console.log("Initial movie:", { ...myMovie });

    // B2.3: Adds the movie's rating.
myMovie.rating = 5;

// Adds a short description of the movie.
myMovie.summary = "World War II movie about the Normandy landings";

// Displays a copy after adding the properties.
console.log("Movie after adding properties:", { ...myMovie });