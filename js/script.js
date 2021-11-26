"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        numberOfFilms = +prompt("How many films have you already seen?", "");

        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("How many films have you already seen?", "");
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
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Your favorite genre #${i} is?`);
        }
    },
    toggleVisibleMyDB: function () {
        if(personalDatabase.private === true) {
            return personalDatabase.private ===false;
        }else if(personalDatabase.private===false) {
            return personalDatabase.private === true;
        }

    }

};

personalMovieDB.start();