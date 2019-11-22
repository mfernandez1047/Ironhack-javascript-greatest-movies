/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    let copy = [...array];

    copy.sort((a, b) =>{
        if(a.year < b.year){
            return -1;
        }
else if(b.year < a.year){
    return 1;
}else if(a.title < b.title){
        return -1;
    }
   

else if(b.title < a.title){
        return 1;
    }

else {
    return 0;
}

    })
    return copy;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(number){
   let steven = number.filter((eachMovie) =>{
       return eachMovie.genre.includes("Drama") && eachMovie.director == "Steven Spielberg"
   })
    return steven.length;
}




// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let copy = [...array];

    copy.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        else if (b.title < a.title) {
            return 1;
        }
    })

    let top20 = copy.splice(0, 20);

    let finalTop20 = top20.map((eachMovie) => {
        return eachMovie.title;
    })

    return finalTop20;
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {

    if (array.length == 0) {
        return 0
    }

    let totalRates = array.reduce((a, c) => {

        return a + (c.rate ? c.rate : 0);

    }, 0);

    let avgRate = (totalRates / array.length).toFixed(2);

    return Number(avgRate);

}



// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {

    let dramaMovies = array.filter(eachMovie => {
        return eachMovie.genre.includes("Drama")
    });

    let avgDramaMovies = ratesAverage(dramaMovies);

    return avgDramaMovies;

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
let copy = [...array];
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAVG(array) {

}