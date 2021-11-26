"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt("How many films have you already seen?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you already seen?", "");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Few films watched");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are a classic viewer");
        } else if (personalMovieDB.count >= 30) {
            console.log("You are a film fan");
        } else {
            console.log("Error!");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Enter your favorite genres of films through a comma`).toLowerCase();

            if (genres === "" || genres === null) {
                console.log('Not correct input datatype');
                i--;
            } else {
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre ${i+1} is ${item}`);
        });
    }
};