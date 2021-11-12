//#1
const numberOfFilms = +prompt("How many films have you already seen?", "");

//#2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

//#3
// const a = prompt("What is one of the last films you watched?", ""),
//     b = prompt("How much would you rate it?", ""),
//     c = prompt("What is one of the last films you watched?", ""),
//     d = prompt("How much would you rate it?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



//#4
// for (let i = 0; i < 2; i++) {
//     const a = prompt("What is one of the last films you watched?", ""),
//           b = prompt("How much would you rate it?", "");
//     personalMovieDB.movies[a] = b;
// }
// console.log(personalMovieDB);

//#5
for (let i = 0; i < 2; i++) {
    const a = prompt("What is one of the last films you watched?", ""),
        b = prompt("How much would you rate it?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Done!");
    } else {
        console.log("Error!");
        i--;
    }
}

//#6
if (personalMovieDB.count < 10) {
    console.log("Few films watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic viewer");
} else if (personalMovieDB.count >= 30) {
    console.log("You are a film fan");
} else {
    console.log("Error!");
}
console.log(personalMovieDB);